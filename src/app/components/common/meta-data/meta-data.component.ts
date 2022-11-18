import { Urls } from './../../UI/icons/icons.component';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-meta-data',
	templateUrl: './meta-data.component.html',
	styleUrls: ['./meta-data.component.scss'],
})
export class MetaDataComponent {
	urls: Urls = {
		date: 'assets/images/single-post/post-el/Calendar.svg',
		duration: 'assets/images/single-post/post-el/Clock.svg',
	};

	@Input() type: 'date' | 'duration' = 'date';
	@Input() text = '';
}
