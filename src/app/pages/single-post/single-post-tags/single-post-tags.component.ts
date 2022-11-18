import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-single-post-tags',
	templateUrl: './single-post-tags.component.html',
	styleUrls: ['./single-post-tags.component.scss'],
})
export class SinglePostTagsComponent implements OnInit {
	@Input() tags: string[] = [];

	constructor() {}

	ngOnInit(): void {}
}
