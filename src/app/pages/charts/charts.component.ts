import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

interface ChartsWithOptions {
	id: number
	lineChartLegend: boolean;
	lineChartOptions: ChartOptions<'line'>;
	lineChartData: ChartConfiguration<'line'>['data'];
}

export interface ChartData {
	src_office_id: number;
	office_name: string;
	dt_date: string;
	qty_orders: number;
	qty_new: number;
	qty_delivered: number;
	qty_return: number;
}

let chartEl = {
	id: 228,
	dates: [
		'2022-10-15',
		'2022-10-16',
		'2022-10-17',
		'2022-10-18',
		'2022-10-19',
		'2022-11-03',
		'2022-11-05',
		'2022-11-06',
		'2022-11-07',
		'2022-11-08',
	],
	additionalInfo: [
		{
			label: 'qty_orders',
			values: [1, 1, 1, 1, 1, 2, 2, 2, 2, 1],
		},
		{
			label: 'qty_new',
			values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		},
		{
			label: 'qty_delivered',
			values: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		},
		{
			label: 'qty_return',
			values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		},
	],
};

interface AdditionalInfo {
	label: string; 
	data: number[];
	tension: number,
	borderColor: string,
	fill: boolean,
}
interface ChartEl {
	id: number;
	dates: string[];
	additionalInfo: AdditionalInfo[];
}

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
	uniqueIds = new Set<number>();
	charts: ChartEl[] = []
	fullScreen = false

	public data: ChartData[] = [];
	public chartsWithOptions: ChartsWithOptions[] = [];

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get('assets/01.json').subscribe((res) => {
			this.data = res as ChartData[];
			this.getUniqueId();
			this.configureData();
			this.addOptionsToData();
		});
	}

	getUniqueId() {
		for (let el of this.data) {
			this.uniqueIds.add(el.src_office_id);
		}
	}

	configureData() {
		for (let id of this.uniqueIds) {
			let chartEl: ChartData[] = [];
			let dates = [];
			let additionalInfo: AdditionalInfo[] = [];
			const forbiddenKeys = ['src_office_id', 'office_name', 'dt_date'];
			const colors = ['black', 'green', 'red', 'blue']

			//only this id
			chartEl = this.data.filter((dataEl) => dataEl.src_office_id === id);
			//all dates with this id
			for (let el of chartEl) {
				dates.push(el.dt_date);
			}
			//nice keys
			let keys = Object.keys(chartEl[0]);
			for (let forbiddenKey of forbiddenKeys) {
				keys = keys.filter((el) => !el.includes(forbiddenKey));
			}
			//create additional data
			let i = 0
			for (let key of keys) {
				let arrWithValuesOfThisKey: any = [];	//todo
				for (let el of chartEl) {
					arrWithValuesOfThisKey.push(el[key as keyof ChartData]);
				}
				additionalInfo.push({
					label: key,
					data: arrWithValuesOfThisKey,
					tension: 0.5,
					borderColor: colors[i],	//todo: цвет разный чтобы был
					fill: true,
				});
				i++
			}
			//add nice data to result chart
			this.charts.push({
				id,
				dates,
				additionalInfo,
			});
		}
	}

	addOptionsToData(){
		for(let chartEl of this.charts){
			this.chartsWithOptions.push({
				id: chartEl.id,
				lineChartOptions: {
					responsive: false,
				},
				lineChartLegend: true,
				lineChartData: {
					labels: chartEl.dates,
					datasets: chartEl.additionalInfo
				}
			})
		}
	}
}
