import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ColorfulDirective } from './directives/colorful.directive';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyCheckboxComponent } from './components/UI/my-checkbox/my-checkbox.component';
import { IconsComponent } from './components/UI/icons/icons.component';
import { MetaDataComponent } from './components/common/meta-data/meta-data.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { PostElComponent } from './pages/single-post/post-el/post-el.component';
import { SinglePostAlsoLikeComponent } from './pages/single-post/single-post-also-like/single-post-also-like.component';
import { TrendingArticleComponent } from './pages/single-post/single-post-sidebar/trending-article/trending-article.component';
import { SinglePostSidebarComponent } from './pages/single-post/single-post-sidebar/single-post-sidebar.component';
import { SinglePostSubscribeComponent } from './pages/single-post/single-post-subscribe/single-post-subscribe.component';
import { SinglePostTagsComponent } from './pages/single-post/single-post-tags/single-post-tags.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactQuestionsComponent } from './pages/contacts/contact-questions/contact-questions.component';
import { ContactInfoComponent } from './pages/contacts/contact-info/contact-info.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
	IconsComponent,
	SignUpComponent,
	SignInComponent,
	HeaderComponent,
	FooterComponent,
	ArticleComponent,
	MetaDataComponent,
	ColorfulDirective,
	MyCheckboxComponent,
	ContactsComponent,
	ContactInfoComponent,
	ContactQuestionsComponent,
	SinglePostComponent,
	SinglePostTagsComponent,
	SinglePostSubscribeComponent,
	SinglePostSidebarComponent,
	TrendingArticleComponent,
	SinglePostAlsoLikeComponent,
	PostElComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatCardModule,
	MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
