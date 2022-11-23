import { HttpClient } from '@angular/common/http';
import {
	Component,
	OnInit,
	ElementRef,
	QueryList,
	ViewChildren,
	HostListener,
	ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

interface ChartWithOptions {
	id?: number;
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
	fill?: boolean;
}

interface ChartEl {
	id?: number;
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
	chartsWithOptions: ChartWithOptions[] = [];
	chartsWithSumOptions: ChartWithOptions[] = [];
	uniqueIds = new Set<number>();
	fullScreen = false;
	idWhoIsFull = -1;

	@ViewChildren('chart') chart!: QueryList<ElementRef>;

	constructor(private http: HttpClient) {}

	@HostListener('document:keydown', ['$event'])
	closeOnEscHandler(event: KeyboardEvent) {
		if (event.key === 'Escape' && this.idWhoIsFull !== -1) {
			this.fullScreenHandler(this.idWhoIsFull);
		}
	}

	ngOnInit(): void {
		this.http.get('assets/01.json').subscribe((res) => {
			this.data = res as ChartData[];
			this.getUniqueId();
			this.configureData();
			this.configureDataToSum();
		});
	}

	fullScreenHandler(id: number): void {
		const chart = this.chart.toArray()[id].nativeElement;
		const chartButton = chart.children[0];
		const chartCanvas = chart.children[1];

		if (chartCanvas.dataset['full'] === 'false') {
			this.idWhoIsFull = id;
			this.chart.toArray().forEach((el, i) => {
				if (i !== id) {
					el.nativeElement.style.display = 'none';
				}
			});

			chartCanvas.style.width = '100vw';
			chartCanvas.style.height = '100vh';
			chartCanvas.className = 'canvas-fullScreen';
			chartCanvas.dataset['full'] = 'true';

			chart.className = 'chart-fullScreen';
			chart.closest('body').style.overflow = 'hidden';
			window.scrollTo(0, 0);

			chartButton.className = 'button-fullScreen';

			const footer = document.querySelector('footer');
			if (footer) footer.style.display = 'none';
		} else {
			this.idWhoIsFull = -1;
			this.chart.toArray().forEach((el) => {
				el.nativeElement.style.display = 'flex';
			});

			chartCanvas.style.width = '800px';
			chartCanvas.style.height = '400px';
			chartCanvas.dataset['full'] = 'false';
			chartCanvas.className = 'canvas';

			chart.closest('body').style.overflow = 'auto';
			chart.className = 'chart';

			chartButton.className = '';

			const footer = document.querySelector('footer');
			if (footer) footer.style.display = 'block';
		}
	}

	getUniqueId(): void {
		for (let el of this.data) {
			this.uniqueIds.add(el.src_office_id);
		}
	}

	configureData(): void {
		let charts: ChartEl[] = []

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
				id,
				dates,
				additionalData,
			});
		}

		this.addOptionsToData(charts, this.chartsWithOptions);
	}

	configureDataToSum() {
		let allDates = new Set<string>();
		let resultArr: ChartEl[] = []
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
			dates: Array.from(allDates),
			additionalData,
		});
		
		this.addOptionsToData(resultArr, this.chartsWithSumOptions)
	}

	createAdditionalSumData(keys: string[], allDates: Set<string>){
		let additionalData: AdditionalData[] = [];

		for (let key of keys) {
			let arrWithValuesOfThisKey: number[] = [];

			for (let date of allDates) {
				//array with this date
				let dateFilters = this.data.filter((el) => el.dt_date === date);

				//sum of values with this date
				let sumOfValuesWithThisDate = dateFilters.reduce(
					(a, chartDataEl) => a + (chartDataEl[key as keyof ChartData] as number),
					0
				);
				arrWithValuesOfThisKey.push(sumOfValuesWithThisDate);
			}
			additionalData.push({
				label: key,
				data: arrWithValuesOfThisKey,
				tension: 0.5
			});
		}

		return additionalData
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
			});
		}

		return additionalData;
	}

	addOptionsToData(charts: ChartEl[], chartsWithOptions: ChartWithOptions[]): void {
		for (let chartEl of charts) {
			chartsWithOptions.push({
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
