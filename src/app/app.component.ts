import { Component, OnInit } from '@angular/core';

import { HostService } from './services/host.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'wb-home-work';
	
	constructor(private hostServices: HostService) {}

	ngOnInit(): void {
		console.log(this.hostServices.host);
	}
}
