import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-toolbar',
  templateUrl: './blog-toolbar.component.html',
  styleUrls: ['./blog-toolbar.component.scss']
})
export class BlogToolbarComponent {
	options: string[] = [
		'all themes',
		'Design',
		'Development',
		'Marketing',
		'Management',
		'HR & Recruting'
	]
}
