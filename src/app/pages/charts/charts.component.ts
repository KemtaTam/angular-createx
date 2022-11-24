import {
	Component,
	OnInit
} from '@angular/core';

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
	configuredData!: ConfiguredData

	constructor(public chartsService: ChartsService) {}

	ngOnInit(): void {
		this.configuredData = this.chartsService.getConfiguredData();
	}
}
