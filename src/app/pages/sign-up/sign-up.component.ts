import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../services/modal.service';

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
