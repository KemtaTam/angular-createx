import { MatDialogRef } from '@angular/material/dialog';
import {
	Component,
	ViewChild,
	ElementRef,
	AfterViewChecked,
} from '@angular/core';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements AfterViewChecked {
	isVisibleForPassword = false;
	socials = ['fb', 'google', 'twitter', 'in'];

	@ViewChild('wrap') wrapRef!: ElementRef;

	constructor(private dialog: MatDialogRef<SignInComponent>) {}

	ngAfterViewChecked(): void {
		window.scrollTo(0, 0);
	}

	closeHandler() {
		this.dialog.close();
	}
}
