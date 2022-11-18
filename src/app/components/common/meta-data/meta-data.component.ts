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

	getAltFromSrc() {
		const regExpForAlt = new RegExp(/\/\b\w+\./);
		
		let alt = this.urls[this.type].match(regExpForAlt);
		if (alt) {
			return alt[0].slice(1, -1);
		} else return '';
	}
}
