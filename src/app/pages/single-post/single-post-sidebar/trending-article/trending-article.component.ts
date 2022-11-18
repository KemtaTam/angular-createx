import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-trending-article',
	templateUrl: './trending-article.component.html',
	styleUrls: ['./trending-article.component.scss'],
})
export class TrendingArticleComponent {
	@Input() text = ''
	@Input() src = ''
	@Input() alt = ''
	@Input() date = ''
}
