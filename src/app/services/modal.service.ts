import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	isSignInVisible = false;
	isSignUpVisible = false;

	/* Возможно лучше сделать обычные сетеры */
	changeVisible(modalName: 'signin' | 'signup'): void {
		switch (modalName) {
			case 'signin':
				this.isSignInVisible = !this.isSignInVisible;
				break;
			case 'signup':
				this.isSignUpVisible = !this.isSignUpVisible;
				break;
			default:
				throw new Error('There is no modal window with this name');
		}
	}

	constructor() {}
}
