import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-my-select[id]',
	templateUrl: './my-select.component.html',
	styleUrls: ['./my-select.component.scss'],
})
export class MySelectComponent {
	id!: string;
	
	@Input() options: string[] = [];
	@Input() label = ''
}
