import { WINDOW } from './../../../providers/window.provider';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

import { Article } from './../../../components/article/article.component';

@Component({
	selector: 'app-single-post-also-like',
	templateUrl: './single-post-also-like.component.html',
	styleUrls: ['./single-post-also-like.component.scss'],
})
export class SinglePostAlsoLikeComponent implements OnInit {
	alsoLikeArticles: Article[] = [
		{
			articleType: 'Podcast',
			backImg: 'assets/images/articles/roadtothedream.png',
			category: 'Design',
			date: 'July 28, 2020',
			duration: '36 min',
			title: 'What are color profiles and how they work in graphic design',
			text: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
		},
		{
			articleType: 'Article',
			backImg: 'assets/images/articles/notebook.png',
			category: 'Development',
			date: 'September 1, 2020',
			title: 'How to choose the first programming language for a beginner',
			text: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
		},
		{
			articleType: 'Article',
			backImg: 'assets/images/articles/chel.png',
			category: 'Design',
			date: 'August 8, 2020',
			title: 'Should you choose a creative profession if you are attracted to creativity?',
			text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
		},
	];

	constructor(
		private router: Router,
		@Inject(WINDOW) private window: Window
	) {}

	ngOnInit(): void {}

	navigateToBlog() {
		this.router.navigate(['/blog']);
		this.window.scroll(0, 0);
	}
}
