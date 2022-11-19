import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
	{path: "contacts", component: ContactsComponent},
	{path: "single-post", component: SinglePostComponent},
	{path: "form", component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
