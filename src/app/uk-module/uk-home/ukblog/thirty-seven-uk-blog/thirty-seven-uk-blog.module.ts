import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkBlogThirtySevenComponent } from './home-uk-blog-thirty-seven/home-uk-blog-thirty-seven.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeUkBlogThirtySevenComponent },
];

@NgModule({
  declarations: [HomeUkBlogThirtySevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThirtySevenUkBlogModule {}
