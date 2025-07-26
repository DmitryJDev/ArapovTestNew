import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogEightySixComponent } from './home-ru-blog-eighty-six/home-ru-blog-eighty-six.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogEightySixComponent }];

@NgModule({
  declarations: [HomeRuBlogEightySixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EightySixRuBlogModule {}
