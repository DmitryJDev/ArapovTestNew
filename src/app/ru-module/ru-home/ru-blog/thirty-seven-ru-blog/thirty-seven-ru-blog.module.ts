import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogThirtySevenComponent } from './home-ru-blog-thirty-seven/home-ru-blog-thirty-seven.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeRuBlogThirtySevenComponent },
];

@NgModule({
  declarations: [HomeRuBlogThirtySevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThirtySevenRuBlogModule {}
