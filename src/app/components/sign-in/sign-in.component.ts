import { Component } from '@angular/core';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
	isVisibleForPassword = false;
	socials = ['fb', 'google', 'twitter', 'in'];

	constructor() {}
}
