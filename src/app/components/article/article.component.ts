import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	podcastSrc = 'assets/images/single-post/also-like/mic.svg'
	articleSrc = 'assets/images/single-post/post-el/Files.svg'

	@Input() articleType: 'Podcast' | 'Article' = 'Article'
	@Input() backImg = ''
	@Input() alt = ''
	@Input() category = ''
	@Input() date = ''
	@Input() duration?: string
	@Input() title = ''
	@Input() text = ''

	constructor() {}

	ngOnInit(): void {}
}
