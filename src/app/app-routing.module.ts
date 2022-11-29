import { BlogComponent } from './pages/blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './pages/charts/charts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
	{path: "contacts", component: ContactsComponent},
	{path: "single-post", component: SinglePostComponent},
	{path: "charts", component: ChartsComponent},
	{path: "blog", component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
