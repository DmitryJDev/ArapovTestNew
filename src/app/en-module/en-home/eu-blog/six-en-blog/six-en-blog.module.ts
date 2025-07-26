import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnBlogSixComponent } from './home-en-blog-six/home-en-blog-six.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEnBlogSixComponent }];

@NgModule({
  declarations: [HomeEnBlogSixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixEnBlogModule {}
