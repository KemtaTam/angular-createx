import { ChartWithOptions } from './../../../services/charts.service';

import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-chart-item',
	templateUrl: './chart-item.component.html',
	styleUrls: ['./chart-item.component.scss'],
})
export class ChartItemComponent {
	isFull = false

	@ViewChild('chart') chart!: ElementRef;
	@Input() chartItem!: ChartWithOptions;

	@HostListener('document:keydown', ['$event'])
	closeOnEscHandler(event: KeyboardEvent) {
		if (event.key === 'Escape' && this.isFull) {
			this.fullScreenHandler();
		}
	}
	
	fullScreenHandler(): void {
		const chart = this.chart.nativeElement;

		if (!this.isFull) {
			this.isFull = true

			chart.closest('body').style.overflow = 'hidden';
			window.scrollTo(0, 0);

			const footer = document.querySelector('footer');
			if (footer) footer.style.display = 'none';
		} else {
			this.isFull = false

			chart.closest('body').style.overflow = 'auto';

			const footer = document.querySelector('footer');
			if (footer) footer.style.display = 'block';
		}
	}
}
