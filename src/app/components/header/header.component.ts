import { SignUpComponent } from './../../components/sign-up/sign-up.component';
import { SignInComponent } from './../../components/sign-in/sign-in.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
