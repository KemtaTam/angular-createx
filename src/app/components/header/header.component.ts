import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(private dialogTrigger: MatDialog) {}

	openDialogLogin(): void {
		this.dialogTrigger.open(SignInComponent);
	}
	openDialogRegister(): void {
		this.dialogTrigger.open(SignUpComponent);
	}
}
