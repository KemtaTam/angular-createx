import { Component, Input, OnInit } from '@angular/core';

export interface Urls {
	[key: string]: string;
}
@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
	urls: Urls = {
		fb: './../../../../assets/images/icons/Facebook.svg',
		insta: './../../../../assets/images/icons/Instagram.svg',
		telegram: './../../../../assets/images/icons/telegram.svg',
		in: './../../../../assets/images/icons/Linked-In.svg',
		google: './../../../../assets/images/icons/Google.svg',
		twitter: './../../../../assets/images/icons/Twitter.svg',
		youtube: './../../../../assets/images/icons/YouTube.svg',
	};

	@Input() socials: string[] = [];
	@Input() gap: string = '32px';
	@Input() width: string = '26px';
	@Input() height: string = this.width;

	constructor() {}

	getStyleForSocialLink(social: string): {
		webkitMask: string;
		mask: string;
	} {
		return {
			webkitMask: 'url(' + this.urls[social] + ') no-repeat center',
			mask: 'url(' + this.urls[social] + ') no-repeat center',
		};
	}

	ngOnInit(): void {}
}
