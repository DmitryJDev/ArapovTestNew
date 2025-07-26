import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogSixtySixComponent } from './home-ru-blog-sixty-six/home-ru-blog-sixty-six.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogSixtySixComponent }];

@NgModule({
  declarations: [HomeRuBlogSixtySixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SixtySixRuBlogModule {}
