import { Component, OnInit } from '@angular/core';

interface Post {
	id: number;
	title: string;
	date: string;
	duration: string;
	backImg: string;
	tags: string[];
}

@Component({
	selector: 'app-post-el',
	templateUrl: './post-el.component.html',
	styleUrls: ['./post-el.component.scss'],
})
export class PostElComponent implements OnInit {
	post: Post = {
		id: 1,
		title: 'HR statistics: job search, interviews, hiring and recruiting',
		date: 'August 3, 2020',
		duration: '4 min read',
		backImg: 'assets/images/articles/keyboard.png',
		tags: ['learning', 'HR', 'self-development'],
	};

	constructor() {}

	ngOnInit(): void {}
}
