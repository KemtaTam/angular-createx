import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Input,
	ViewChild,
} from '@angular/core';
import { Chart, ChartTypeRegistry, ScatterDataPoint } from 'chart.js';

import { ChartWithOptions } from './../../../services/charts.service';

@Component({
	selector: 'app-chart-item',
	templateUrl: './chart-item.component.html',
	styleUrls: ['./chart-item.component.scss'],
})
export class ChartItemComponent implements AfterViewInit {
	isFull = false;
	chart!: Chart<
		keyof ChartTypeRegistry,
		(number | ScatterDataPoint | null)[],
		unknown
	>;

	@ViewChild('chartWrapper') chartWrapper!: ElementRef;
	@ViewChild('canvas') canvas!: ElementRef;

	@Input() chartItem!: ChartWithOptions;

	ngAfterViewInit(): void {
		this.createChart();
	}

	@HostListener('document:keydown', ['$event'])
	closeOnEscHandler(event: KeyboardEvent) {
		if (event.key === 'Escape' && this.isFull) {
			this.fullScreenHandler();
		}
	}

	createChart() {
		this.chart = new Chart(this.canvas.nativeElement, {
			type: 'line',
			data: {
				labels: this.chartItem.lineChartData.labels,
				datasets: this.chartItem.lineChartData.datasets,
			},
		});
	}

	fullScreenHandler(): void {
		const chart = this.chartWrapper.nativeElement;

		if (!this.isFull) {
			this.isFull = true;
			chart.closest('body').style.overflow = 'hidden';
		} else {
			this.isFull = false;
			chart.closest('body').style.overflow = 'auto';
		}
	}
}
