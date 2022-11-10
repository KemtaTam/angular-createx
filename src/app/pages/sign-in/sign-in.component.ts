import { ModalService } from '../../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
	isVisibleForPassword = false;

	constructor(public modalService: ModalService) {}

	ngOnInit(): void {
	}
}
