import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-info',
	templateUrl: './contact-info.component.html',
	styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
	emailToTalk = 'hello@createx.com';
	phone = 9097725001;
	socials = ['fb', 'twitter', 'youtube', 'telegram', 'insta', 'in'];

	constructor() {}

	ngOnInit(): void {
	}

	getMaskNumber(): string {
		return this.phone
			.toString()
			.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
	}
}
