import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
