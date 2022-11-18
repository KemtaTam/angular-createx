import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ContactsDataService {
	emailToTalk = 'hello@createx.com';
	phone = 4055550128;
	address = '2464 Royal Ln. Mesa, New Jersey 45463, USA'

	constructor() {}

	getMaskNumber(): string {
		return this.phone
			.toString()
			.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
	}
}
