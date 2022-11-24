import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ChartConfiguration, ChartOptions } from 'chart.js';

import { ConfiguredData } from './../pages/charts/charts.component';

export interface ChartData {
	src_office_id: number;
	office_name: string;
	dt_date: string;
	qty_orders: number;
	qty_new: number;
	qty_delivered: number;
	qty_return: number;
}

export interface ChartWithOptions {
	title: string;
	lineChartLegend: boolean;
	lineChartOptions: ChartOptions<'line'>;
	lineChartData: ChartConfiguration<'line'>['data'];
}

export interface AdditionalData {
	label: string;
	data: number[];
	tension: number;
	fill?: boolean;
}

export interface ChartEl {
	title: string;
	dates: string[];
	additionalData: AdditionalData[];
}

@Injectable({
	providedIn: 'root',
})
export class ChartsService {
	private uniqueIds = new Set<number>();
	private data!: ChartData[];
	private chartsWithOptions: ChartWithOptions[] = [];
	private chartsWithSumOptions: ChartWithOptions[] = [];
	private baseUrl = 'assets/';

	isLoading = false;
	error = '';

	constructor(private http: HttpClient) {}

	private load(): Observable<ChartData[] | null> {
		return this.http.get<ChartData[]>(this.baseUrl + '01.json').pipe(
			catchError((error) => {
				console.log('Error: ', error.message);
				return throwError(() => error);
			})
		);
	}

	getConfiguredData(): ConfiguredData {
		this.buildDataToChart();
		return {
			data: this.chartsWithOptions,
			dataToSum: this.chartsWithSumOptions,
		};
	}

	private buildDataToChart() {
		this.isLoading = true
		this.load().subscribe({
			next: (res) => {
				this.isLoading = false
				this.data = res as ChartData[];
				this.getUniqueId();
				this.configureData();
				this.configureDataToSum();
			},
			error: (error) => {
				this.error = error.message;
			},
		});
	}

	private getUniqueId(): void {
		for (let el of this.data) {
			this.uniqueIds.add(el.src_office_id);
		}
	}

	private configureData(): void {
		let charts: ChartEl[] = [];

		for (let id of this.uniqueIds) {
			let chartElData: ChartData[] = [];
			let dates = [];
			let additionalData: AdditionalData[] = [];
			const unnecessaryKeys = ['src_office_id', 'office_name', 'dt_date'];

			//only this id
			chartElData = this.data.filter(
				(dataEl) => dataEl.src_office_id === id
			);

			//all dates with this id
			for (let el of chartElData) {
				dates.push(el.dt_date);
			}

			//keys that will be displayed on the chart
			let keys = Object.keys(chartElData[0]); //take the keys of any such element
			for (let unnecessaryKey of unnecessaryKeys) {
				keys = keys.filter((el) => !el.includes(unnecessaryKey));
			}

			additionalData = this.createAdditionalData(keys, chartElData);

			//add configured data to resulting chart
			charts.push({
				title: chartElData[0].office_name,
				dates,
				additionalData,
			});
		}

		this.addOptionsToData(charts, this.chartsWithOptions);
	}

	private configureDataToSum() {
		let allDates = new Set<string>();
		let resultArr: ChartEl[] = [];
		let additionalData: AdditionalData[] = [];
		const unnecessaryKeys = ['src_office_id', 'office_name', 'dt_date'];

		//get unique date
		for (let el of this.data) {
			allDates.add(el.dt_date);
		}

		//keys that will be displayed on the chart
		let keys = Object.keys(this.data[0]); //take the keys of any such element
		for (let unnecessaryKey of unnecessaryKeys) {
			keys = keys.filter((el) => !el.includes(unnecessaryKey));
		}

		additionalData = this.createAdditionalSumData(keys, allDates);

		//add configured data to resulting chart
		resultArr.push({
			title: 'Sum',
			dates: Array.from(allDates),
			additionalData,
		});

		this.addOptionsToData(resultArr, this.chartsWithSumOptions);
	}

	private createAdditionalData(
		keys: string[],
		chartElData: ChartData[]
	): AdditionalData[] {
		let additionalData: AdditionalData[] = [];

		for (let key of keys) {
			let arrWithValuesOfThisKey: number[] = [];

			for (let el of chartElData) {
				arrWithValuesOfThisKey.push(
					el[key as keyof ChartData] as number
				);
			}

			additionalData.push({
				label: key,
				data: arrWithValuesOfThisKey,
				tension: 0.5,
			});
		}

		return additionalData;
	}

	private createAdditionalSumData(keys: string[], allDates: Set<string>) {
		let additionalData: AdditionalData[] = [];

		for (let key of keys) {
			let arrWithValuesOfThisKey: number[] = [];

			for (let date of allDates) {
				//array with this date
				let dateFilters = this.data.filter((el) => el.dt_date === date);

				//sum of values with this date
				let sumOfValuesWithThisDate = dateFilters.reduce(
					(a, chartDataEl) =>
						a + (chartDataEl[key as keyof ChartData] as number),
					0
				);
				arrWithValuesOfThisKey.push(sumOfValuesWithThisDate);
			}
			additionalData.push({
				label: key,
				data: arrWithValuesOfThisKey,
				tension: 0.5,
			});
		}

		return additionalData;
	}

	private addOptionsToData(
		charts: ChartEl[],
		chartsWithOptions: ChartWithOptions[]
	): void {
		for (let chartEl of charts) {
			chartsWithOptions.push({
				title: chartEl.title,
				lineChartOptions: {
					responsive: true,
					/* maintainAspectRatio: false */
					
				},
				lineChartLegend: true,
				lineChartData: {
					labels: chartEl.dates,
					datasets: chartEl.additionalData,
				},
			});
		}
	}
}
