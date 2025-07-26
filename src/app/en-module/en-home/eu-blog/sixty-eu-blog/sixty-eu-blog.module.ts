import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEuBlogSixtyComponent } from './home-eu-blog-sixty/home-eu-blog-sixty.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEuBlogSixtyComponent }];

@NgModule({
  declarations: [HomeEuBlogSixtyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixtyEuBlogModule {}
