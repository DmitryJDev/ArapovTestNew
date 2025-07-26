import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnBlogSeventyEightComponent } from './home-en-blog-seventy-eight/home-en-blog-seventy-eight.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeEnBlogSeventyEightComponent },
];

@NgModule({
  declarations: [HomeEnBlogSeventyEightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SeventyEightEnBlogModule {}
