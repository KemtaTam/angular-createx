import { HttpClient } from '@angular/common/http';
import {
	Component,
	OnInit,
	ElementRef,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

interface ChartsWithOptions {
	id: number;
	lineChartLegend: boolean;
	lineChartOptions: ChartOptions<'line'>;
	lineChartData: ChartConfiguration<'line'>['data'];
}

interface ChartData {
	src_office_id: number;
	office_name: string;
	dt_date: string;
	qty_orders: number;
	qty_new: number;
	qty_delivered: number;
	qty_return: number;
}

interface AdditionalData {
	label: string;
	data: number[];
	tension: number;
	fill: boolean;
}

interface ChartEl {
	id: number;
	dates: string[];
	additionalData: AdditionalData[];
}

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
	charts: ChartEl[] = [];
	data: ChartData[] = [];
	chartsWithOptions: ChartsWithOptions[] = [];
	uniqueIds = new Set<number>();
	fullScreen = false;

	@ViewChildren('chart') chart!: QueryList<ElementRef>;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get('assets/01.json').subscribe((res) => {
			this.data = res as ChartData[];
			this.getUniqueId();
			this.configureData();
			this.addOptionsToData();
		});
	}

	fullScreenHandler(id: number): void {
		const chart = this.chart.toArray()[id].nativeElement;
		const chartButton = chart.children[0];
		const chartCanvas = chart.children[1];

		if (chartCanvas.dataset['full'] === 'false') {
			chartCanvas.style.width = '50vw';
			chartCanvas.style.height = '100vh';
			chartCanvas.className = 'canvas-fullScreen';
			chartCanvas.dataset['full'] = 'true';

			chart.closest('body').style.overflow = 'hidden';
			chart.className = 'chart-fullScreen';

			chartButton.className = 'button-fullScreen';
		} else {
			chartCanvas.style.width = '600px';
			chartCanvas.style.height = '600px';
			chartCanvas.dataset['full'] = 'false';
			chartCanvas.className = 'canvas';

			chart.closest('body').style.overflow = 'auto';
			chart.className = 'chart';

			chartButton.className = '';
		}
	}

	getUniqueId(): void {
		for (let el of this.data) {
			this.uniqueIds.add(el.src_office_id);
		}
	}

	configureData(): void {
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
			this.charts.push({
				id,
				dates,
				additionalData,
			});
		}
	}

	createAdditionalData(
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
				fill: true,
			});
		}

		return additionalData;
	}

	addOptionsToData(): void {
		for (let chartEl of this.charts) {
			this.chartsWithOptions.push({
				id: chartEl.id,
				lineChartOptions: {
					responsive: false,
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
