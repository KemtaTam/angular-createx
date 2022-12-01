import { WINDOW } from './../../../providers/window.provider';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements AfterViewInit, AfterViewChecked {
	isVisibleForPassword = false;
	isVisibleForConfirmPassword = false;
	socials = ['fb', 'google', 'twitter', 'in'];

	@ViewChild('signup') signup!: ElementRef;

	constructor(
		private dialog: MatDialogRef<SignUpComponent>,
		@Inject(WINDOW) private window: Window
	) {}
	
	ngAfterViewChecked(): void {
		this.window.scrollTo(0, 0);
	}

	ngAfterViewInit(): void {
		const signup = this.signup.nativeElement;
		signup.closest('body').style.overflow = 'hidden';
	}

	closeHandler() {
		const signup = this.signup.nativeElement;
		this.dialog.close();
		signup.closest('body').style.overflow = 'auto';
	}
}
