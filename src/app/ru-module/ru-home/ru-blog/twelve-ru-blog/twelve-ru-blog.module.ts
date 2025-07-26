import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogTwelveComponent } from './home-ru-blog-twelve/home-ru-blog-twelve.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogTwelveComponent }];

@NgModule({
  declarations: [HomeRuBlogTwelveComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwelveRuBlogModule {}
