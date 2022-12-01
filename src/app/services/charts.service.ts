import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { ChartConfiguration } from 'chart.js';

import { ConfiguredData } from './../pages/charts/charts.component';

export interface ChartDataItem {
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
	lineChartData: ChartConfiguration<'line'>['data'];
}

export interface AdditionalData {
	label: string;
	data: number[];
	tension: number;
	backgroundColor?: string;
	borderColor?: string;
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
	private data!: ChartDataItem[];
	private chartsWithOptions: ChartWithOptions[] = [];
	private chartsWithSumOptions: ChartWithOptions[] = [];
	private baseUrl = 'assets';
	private colors: string[] = ['red', 'green', 'blue', 'black'];

	constructor(private http: HttpClient) {}

	load(): Observable<ConfiguredData> {
		return this.http.get<ChartDataItem[]>(`${this.baseUrl}/01.json`).pipe(
			delay(500), //server response simulation
			map((res) => {
				this.data = res;
				this.getUniqueId();
				this.configureData();
				this.configureDataToSum();

				return {
					data: this.chartsWithOptions,
					dataToSum: this.chartsWithSumOptions,
				};
			}),
			catchError((error) => {
				console.log('Error: ', error.message);
				return throwError(() => error);
			})
		);
	}

	private getUniqueId(): void {
		for (const el of this.data) {
			this.uniqueIds.add(el.src_office_id);
		}
	}

	private configureData(): void {
		const charts: ChartEl[] = [];

		for (const id of this.uniqueIds) {
			let chartElData: ChartDataItem[] = [];
			let additionalData: AdditionalData[] = [];
			const dates: string[] = [];
			const unnecessaryKeys = ['src_office_id', 'office_name', 'dt_date'];

			//only this id
			chartElData = this.data.filter(
				(dataEl) => dataEl.src_office_id === id
			);

			//all dates with this id
			for (const el of chartElData) {
				dates.push(el.dt_date);
			}

			//keys that will be displayed on the chart
			let keys = Object.keys(chartElData[0]); //take the keys of any element
			for (const unnecessaryKey of unnecessaryKeys) {
				keys = keys.filter((el) => !el.includes(unnecessaryKey));
			}

			additionalData = this.createAdditionalData(keys, chartElData);

			//add configured data to resulting chart
			charts.push({
				//all elements have the same title accordingly we take any
				title: chartElData[0].office_name,
				dates,
				additionalData,
			});
		}

		this.addOptionsToData(charts, this.chartsWithOptions);
	}

	private configureDataToSum() {
		const allDates = new Set<string>();
		const resultArr: ChartEl[] = [];
		const unnecessaryKeys = ['src_office_id', 'office_name', 'dt_date'];
		let additionalData: AdditionalData[] = [];

		//get unique date
		for (const el of this.data) {
			allDates.add(el.dt_date);
		}

		//keys that will displayed on the chart
		let keys = Object.keys(this.data[0]); //take the keys of any such element
		for (const unnecessaryKey of unnecessaryKeys) {
			keys = keys.filter((el) => !el.includes(unnecessaryKey));
		}

		additionalData = this.createAdditionalSumData(keys, allDates);

		//add configured data to resulting chart
		resultArr.push({
			title: 'Sum',
			dates: [...allDates],
			additionalData,
		});

		this.addOptionsToData(resultArr, this.chartsWithSumOptions);
	}

	private createAdditionalData(
		keys: string[],
		chartElData: ChartDataItem[]
	): AdditionalData[] {
		const additionalData: AdditionalData[] = [];
		let indexOfColor = 0;

		for (const key of keys) {
			const arrWithValuesOfThisKey: number[] = [];

			for (const el of chartElData) {
				arrWithValuesOfThisKey.push(
					el[key as keyof ChartDataItem] as number
				);
			}

			additionalData.push({
				label: key,
				data: arrWithValuesOfThisKey,
				tension: 0.5,
				backgroundColor: this.colors[indexOfColor],
				borderColor: this.colors[indexOfColor],
			});
			indexOfColor++;
		}

		return additionalData;
	}

	private createAdditionalSumData(
		keys: string[],
		allDates: Set<string>
	): AdditionalData[] {
		const additionalData: AdditionalData[] = [];
		let indexOfColor = 0;

		for (const key of keys) {
			const arrWithValuesOfThisKey: number[] = [];

			for (const date of allDates) {
				//array with this date
				const dateFilters = this.data.filter(
					(el) => el.dt_date === date
				);

				const sumOfValuesWithThisDate = dateFilters.reduce(
					(a, chartDataEl) =>
						a + (chartDataEl[key as keyof ChartDataItem] as number),
					0
				);
				arrWithValuesOfThisKey.push(sumOfValuesWithThisDate);
			}
			
			additionalData.push({
				label: key,
				data: arrWithValuesOfThisKey,
				tension: 0.5,
				backgroundColor: this.colors[indexOfColor],
				borderColor: this.colors[indexOfColor],
			});
			indexOfColor++;
		}

		return additionalData;
	}

	private addOptionsToData(
		charts: ChartEl[],
		chartsWithOptions: ChartWithOptions[]
	): void {
		for (const chartEl of charts) {
			chartsWithOptions.push({
				title: chartEl.title,
				lineChartData: {
					labels: chartEl.dates,
					datasets: chartEl.additionalData,
				},
			});
		}
	}
}
