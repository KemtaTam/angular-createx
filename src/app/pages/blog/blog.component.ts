import { Article } from './../../components/article/article.component';
import { Component } from '@angular/core';

//todo: сделать поиск компонентой
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
	blogArticles: Article[] = [
		{
			articleType: 'Podcast',
			backImg: 'assets/images/articles/face.png',
			category: 'Marketing',
			date: 'September 4, 2020',
			duration: '36 min',
			title: 'What is traffic arbitrage and does it really make money?',
			text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
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
			articleType: 'Video', 
			backImg: 'assets/images/articles/chel.png',
			category: 'Design',
			date: 'August 8, 2020',
			duration: '40 min',
			title: 'Should you choose a creative profession if you are attracted to creativity?',
			text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
		},
		{
			articleType: 'Article', 
			backImg: 'assets/images/articles/keyboard.png',
			category: 'HR & Recruting',
			date: 'August 3, 2020',
			title: 'HR statistics: job search,  interviews, hiring and recruiting',
			text: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
		},
		{
			articleType: 'Video', 
			backImg: 'assets/images/articles/flos.png',
			category: 'Management',
			date: 'August 2, 2020',
			duration: '45 min',
			title: 'What to do and who to talk to if you want to get feedback on the product',
			text: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
		},
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
			articleType: 'Video', 
			backImg: 'assets/images/articles/pot.png',
			category: 'Management',
			date: 'July 15, 2020',
			duration: '45 min',
			title: 'Startup: how to build a team that will live longer than a year',
			text: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
		},
		{
			articleType: 'Article', 
			backImg: 'assets/images/articles/printer.png',
			category: 'Marketing',
			date: 'July 9, 2020',
			title: 'How to get customers to love your business from the start',
			text: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
		},
	];
}
