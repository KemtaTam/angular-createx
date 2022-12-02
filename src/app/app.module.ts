import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './classes/token.interceptor';
import { WINDOW_PROVIDERS } from './providers/window.provider';
import { AppRoutingModule } from './app-routing.module';
import { ColorfulDirective } from './directives/colorful.directive';
import { AltPipe } from './pipes/alt.pipe';
import { HostService } from './services/host.service';

import { AppComponent } from './app.component';
import { MyCheckboxComponent } from './components/UI/my-checkbox/my-checkbox.component';
import { IconsComponent } from './components/UI/icons/icons.component';
import { MetaDataComponent } from './components/common/meta-data/meta-data.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { TitleComponent } from './components/common/title/title.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { ContainerComponent } from './components/common/container/container.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { SearchComponent } from './components/UI/search/search.component';
import { MyButtonComponent } from './components/UI/my-button/my-button.component';
import { MySelectComponent } from './components/UI/my-select/my-select.component';
import { MyInputComponent } from './components/UI/my-input/my-input.component';

import { PostElComponent } from './pages/single-post/post-el/post-el.component';
import { SinglePostAlsoLikeComponent } from './pages/single-post/single-post-also-like/single-post-also-like.component';
import { TrendingArticleComponent } from './pages/single-post/single-post-sidebar/trending-article/trending-article.component';
import { SinglePostSidebarComponent } from './pages/single-post/single-post-sidebar/single-post-sidebar.component';
import { SinglePostTagsComponent } from './pages/single-post/single-post-tags/single-post-tags.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactQuestionsComponent } from './pages/contacts/contact-questions/contact-questions.component';
import { ContactInfoComponent } from './pages/contacts/contact-info/contact-info.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ChartItemComponent } from './pages/charts/chart-item/chart-item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogToolbarComponent } from './pages/blog/blog-toolbar/blog-toolbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
	declarations: [
		AltPipe,
		AppComponent,
		IconsComponent,
		SignInComponent,
		ArticleComponent,
		TrendingArticleComponent,
		SinglePostSidebarComponent,
		SinglePostAlsoLikeComponent,
		SignUpComponent,
		ChartsComponent,
		ColorfulDirective,
		ContactsComponent,
		ChartItemComponent,
		MyCheckboxComponent,
		SinglePostComponent,
		ContactInfoComponent,
		ContactQuestionsComponent,
		SinglePostTagsComponent,
		HeaderComponent,
		FooterComponent,
		PostElComponent,
		MetaDataComponent,
		PreloaderComponent,
		BlogComponent,
		TitleComponent,
		SubscribeComponent,
		ContainerComponent,
		BlogToolbarComponent,
		PaginationComponent,
		SearchComponent,
		MyButtonComponent,
		MySelectComponent,
		MyInputComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatDialogModule,
		ReactiveFormsModule,
		HttpClientModule,
		FormsModule,
	],
	providers: [
		WINDOW_PROVIDERS,
		HostService,
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: TokenInterceptor,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
