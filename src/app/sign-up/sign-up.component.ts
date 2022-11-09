import { ModalService } from './../services/modal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
	isVisibleForPassword = false;
	isVisibleForConfirmPassword = false;

	constructor(public modalService: ModalService) {}

	ngOnInit(): void {}
}
