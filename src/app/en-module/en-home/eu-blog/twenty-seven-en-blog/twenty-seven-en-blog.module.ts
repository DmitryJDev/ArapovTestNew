import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnBlogTwentySevenComponent } from './home-en-blog-twenty-seven/home-en-blog-twenty-seven.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeEnBlogTwentySevenComponent },
];

@NgModule({
  declarations: [HomeEnBlogTwentySevenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentySevenEnBlogModule {}
