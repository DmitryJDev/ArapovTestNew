import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogTwentyOneComponent } from './home-ru-blog-twenty-one/home-ru-blog-twenty-one.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogTwentyOneComponent }];

@NgModule({
  declarations: [HomeRuBlogTwentyOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyOneRuBlogModule {}
