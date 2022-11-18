import { Component, OnInit } from '@angular/core';

interface Author {
	id: number;
	name: string;
	activity: string;
	ava: string;
}
interface TrendingArticles {
	id: number;
	date: string;
	img: string;
	text: string;
}

@Component({
	selector: 'app-single-post-sidebar',
	templateUrl: './single-post-sidebar.component.html',
	styleUrls: ['./single-post-sidebar.component.scss'],
})
export class SinglePostSidebarComponent implements OnInit {
	author: Author = {
		id: 1,
		name: 'Kristin Watson',
		activity: 'Curator of Marketing Course',
		ava: 'assets/images/single-post/single-post-sidebar/woman.png',
	};

	trendingArticles: TrendingArticles[] = [
		{
			id: 1,
			date: 'September 4, 2020',
			img: 'assets/images/single-post/single-post-sidebar/face.png',
			text: 'What is traffic arbitrage and does it really make money?',
		},
		{
			id: 2,
			date: 'July 15, 2020',
			img: 'assets/images/single-post/single-post-sidebar/pot.png',
			text: 'Startup: how to build a team that will live longer than a year',
		},
		{
			id: 3,
			date: 'August 2, 2020',
			img: 'assets/images/single-post/single-post-sidebar/flos.png',
			text: 'What to do if you want to get feedback on the product',
		},
	];

	tags: string[] = [
		'marketing',
		'recruiting',
		'coding',
		'learning',
		'HR',
		'self-development',
	];

	constructor() {}

	ngOnInit(): void {}
}
