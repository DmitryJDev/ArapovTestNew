import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogTwentySixComponent } from './home-ru-blog-twenty-six/home-ru-blog-twenty-six.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogTwentySixComponent }];

@NgModule({
  declarations: [HomeRuBlogTwentySixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentySixRuBlogModule {}
