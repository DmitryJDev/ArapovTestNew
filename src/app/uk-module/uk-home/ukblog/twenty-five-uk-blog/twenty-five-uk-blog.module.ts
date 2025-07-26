import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkBlogTwentyFiveComponent } from './home-uk-blog-twenty-five/home-uk-blog-twenty-five.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeUkBlogTwentyFiveComponent }];

@NgModule({
  declarations: [HomeUkBlogTwentyFiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyFiveUkBlogModule {}
