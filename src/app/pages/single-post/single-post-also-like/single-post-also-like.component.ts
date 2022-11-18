import { Component, OnInit } from '@angular/core';

interface Article {
	articleType: 'Podcast' | 'Article';
	backImg: string;
	category: string;
	date: string;
	title: string;
	text: string;
	duration?: string;
}

@Component({
	selector: 'app-single-post-also-like',
	templateUrl: './single-post-also-like.component.html',
	styleUrls: ['./single-post-also-like.component.scss'],
})
export class SinglePostAlsoLikeComponent implements OnInit {
	alsoLikeArticles: Article[] = [
		{
			articleType: 'Podcast',
			backImg: 'assets/images/single-post/also-like/roadtothedream.png',
			category: 'Design',
			date: 'July 28, 2020',
			duration: '36 min',
			title: 'What are color profiles and how they work in graphic design',
			text: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
		},
		{
			articleType: 'Article',
			backImg: 'assets/images/single-post/also-like/notebook.png',
			category: 'Development',
			date: 'September 1, 2020',
			title: 'How to choose the first programming language for a beginner',
			text: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
		},
		{
			articleType: 'Article', 
			backImg: 'assets/images/single-post/also-like/chel.png',
			category: 'Design',
			date: 'August 8, 2020',
			title: 'Should you choose a creative profession if you are attracted to creativity?',
			text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
