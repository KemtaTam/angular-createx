import { Component, Input } from '@angular/core';
//todo: пофиксить сигин сигап
@Component({
	selector: 'app-my-input',
	templateUrl: './my-input.component.html',
	styleUrls: ['./my-input.component.scss'],
})
export class MyInputComponent {
	@Input() type = 'text';
	@Input() placeholder = '';
	@Input() height? = '44px'
	@Input() name? = ''
	@Input() label? = ''

	isVisibleForPassword = false;
}
