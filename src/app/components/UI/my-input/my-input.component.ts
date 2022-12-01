import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-my-input',
	templateUrl: './my-input.component.html',
	styleUrls: ['./my-input.component.scss'],
})
export class MyInputComponent {
	@Input() type = 'text';
	@Input() placeholder = '';
	@Input() id?: string;

	isVisibleForPassword = false;
}
