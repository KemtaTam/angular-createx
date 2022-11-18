import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-my-checkbox',
	templateUrl: './my-checkbox.component.html',
	styleUrls: ['./my-checkbox.component.scss'],
})
export class MyCheckboxComponent {
	@Input() text: string = '';
	@Input() maxWidth: string = '';

	constructor() {}
}
