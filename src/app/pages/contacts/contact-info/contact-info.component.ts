import { ContactsDataService } from './../../../services/contacts-data.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-contact-info',
	templateUrl: './contact-info.component.html',
	styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
	socials = ['fb', 'twitter', 'youtube', 'telegram', 'insta', 'in'];

	constructor(public contactsDataService: ContactsDataService) {}
}
