import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-info',
	templateUrl: './contact-info.component.html',
	styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
	emailToTalk = 'hello@createx.com';
	phone = '(405) 555-0128'
	socials = [
		'fb',
		'twitter',
		'youtube',
		'telegram',
		'insta',
		'in'
	]

	constructor() {}

	ngOnInit(): void {
		this.getNumber()
	}

	getNumber(){
		return this.phone.replace(/[^0-9]/g, '')
	}
}
