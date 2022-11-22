import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './pages/charts/charts.component';
import { FormComponent } from './components/form/form.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
	{path: "contacts", component: ContactsComponent},
	{path: "single-post", component: SinglePostComponent},
	{path: "form", component: FormComponent},
	{path: "charts", component: ChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
