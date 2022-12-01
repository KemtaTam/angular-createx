import { MatDialogRef } from '@angular/material/dialog';
import {
	Component,
	ViewChild,
	ElementRef,
	Inject,
	AfterViewInit,
	AfterViewChecked,
} from '@angular/core';

import { WINDOW } from './../../../providers/window.provider';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements AfterViewInit, AfterViewChecked {
	isVisibleForPassword = false;
	socials = ['fb', 'google', 'twitter', 'in'];

	@ViewChild('signin') signin!: ElementRef;

	constructor(
		private dialog: MatDialogRef<SignInComponent>,
		@Inject(WINDOW) private window: Window
	) {}

	ngAfterViewChecked(): void {
		this.window.scrollTo(0, 0);
	}

	ngAfterViewInit(): void {
		const signin = this.signin.nativeElement;
		signin.closest('body').style.overflow = 'hidden';
	}

	closeHandler() {
		const signin = this.signin.nativeElement;	
		debugger
		signin.closest('body').style.overflow = 'auto';
		this.dialog.close();
	}


}
