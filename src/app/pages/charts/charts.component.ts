import { Component, OnInit } from '@angular/core';

import {
	ChartsService,
	ChartWithOptions,
} from './../../services/charts.service';

export interface ConfiguredData {
	data: ChartWithOptions[];
	dataToSum: ChartWithOptions[];
}

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
	configuredData!: ConfiguredData;
	error = '';
	isLoading = true;

	constructor(public chartsService: ChartsService) {}

	ngOnInit(): void {
		this.chartsService.load().subscribe({
			next: (res) => {
				this.configuredData = res;
				this.configuredData.data.push(this.configuredData.dataToSum[0]);
			},
			error: (error) => {
				this.error = error.message;
			},
			complete: () => {
				this.isLoading = false;
			},
		});
	}
}
