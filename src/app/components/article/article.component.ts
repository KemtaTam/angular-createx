import { WINDOW } from './../../providers/window.provider';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Article {
	articleType: 'Podcast' | 'Article' | 'Video';
	backImg: string;
	category: string;
	date: string;
	title: string;
	text: string;
	duration?: string;
}

interface ArticleType {
	Podcast: string;
	Article: string;
	Video: string;
}

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articleTypeSrc: ArticleType = {
		Podcast: 'assets/images/articles/mic.svg',
		Article: 'assets/images/articles/Files.svg',
		Video: 'assets/images/articles/Play.svg',
	};

	articleTypeAction: ArticleType = {
		Podcast: 'Listen',
		Article: 'Read',
		Video: 'Watch',
	};

	articleWidth = '390px'

	@Input() articleType: 'Podcast' | 'Article' | 'Video' = 'Article';
	@Input() backImg = '';
	@Input() category = '';
	@Input() date = '';
	@Input() duration?: string;
	@Input() title = '';
	@Input() text = '';

	constructor(private router: Router, @Inject(WINDOW) private window: Window) {}

	ngOnInit(): void {
		const img = new Image();
		img.src = this.backImg;

		img.onload = () => {
			const percentDif = (img.height - 300) / img.height;
			this.articleWidth = img.width * (1 - percentDif) + 'px'
		};
	}

	navigateToSinglePost(){
		this.router.navigate(['/single-post']);
		this.window.scroll(0, 0);
	}
}
