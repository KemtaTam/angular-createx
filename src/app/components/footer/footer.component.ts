import { ContactsDataService } from './../../services/contacts-data.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	socials = ['fb', 'twitter', 'youtube', 'telegram', 'insta', 'in'];

	constructor(public contactsDataService: ContactsDataService) {}
}
