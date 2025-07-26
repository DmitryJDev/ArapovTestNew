import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogFourtyNineComponent } from './home-ru-blog-fourty-nine/home-ru-blog-fourty-nine.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogFourtyNineComponent }];

@NgModule({
  declarations: [HomeRuBlogFourtyNineComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtyNineRuBlogModule {}
