import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactInfoComponent } from './pages/contacts/contact-info/contact-info.component';
import { ContactQuestionsComponent } from './pages/contacts/contact-questions/contact-questions.component';
import { ModalService } from './services/modal.service';
import { MyCheckboxComponent } from './components/UI/my-checkbox/my-checkbox.component';
import { IconsComponent } from './components/UI/icons/icons.component';
import { SinglePostComponent } from "./pages/single-post/single-post.component";

@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        SignInComponent,
        ContactsComponent,
        HeaderComponent,
        FooterComponent,
        ContactInfoComponent,
        ContactQuestionsComponent,
        MyCheckboxComponent,
        IconsComponent
    ],
    providers: [ModalService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SinglePostComponent
    ]
})
export class AppModule { }
