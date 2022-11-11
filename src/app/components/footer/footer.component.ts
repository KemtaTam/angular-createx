import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	socials = ['fb', 'twitter', 'youtube', 'telegram', 'insta', 'in'];

	constructor() {}

	ngOnInit(): void {}
}
