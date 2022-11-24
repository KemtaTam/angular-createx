import { ContactsDataService } from './../../../services/contacts-data.service';
import { Component } from '@angular/core';

declare var ymaps: any;

@Component({
	selector: 'app-contact-info',
	templateUrl: './contact-info.component.html',
	styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
	socials = ['fb', 'twitter', 'youtube', 'telegram', 'insta', 'in'];
	public map: any;

	constructor(public contactsDataService: ContactsDataService) {}

	ngOnInit(): void {
		ymaps.ready().then(() => {
			this.map = new ymaps.Map('map', {
				center: [50.2750, 127.5211],
				zoom: 12,
			});
		});
	}
}
