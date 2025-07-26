import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogThirtyTwoComponent } from './home-ru-blog-thirty-two/home-ru-blog-thirty-two.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogThirtyTwoComponent }];

@NgModule({
  declarations: [HomeRuBlogThirtyTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThirtyTwoRuBlogModule {}
