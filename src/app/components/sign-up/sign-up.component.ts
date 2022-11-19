import { MatDialogRef } from '@angular/material/dialog';
import { Component, AfterViewChecked } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements AfterViewChecked{
	isVisibleForPassword = false;
	isVisibleForConfirmPassword = false;
	socials = ['fb', 'google', 'twitter', 'in'];
	
	constructor(private dialog: MatDialogRef<SignUpComponent>) {}

	ngAfterViewChecked(): void{
		window.scrollTo(0, 0);
	}

	closeHandler() {
		this.dialog.close();
	}
}
