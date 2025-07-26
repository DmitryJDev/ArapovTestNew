import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuBlogFourtyOneComponent } from './home-ru-blog-fourty-one/home-ru-blog-fourty-one.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeRuBlogFourtyOneComponent }];

@NgModule({
  declarations: [HomeRuBlogFourtyOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtyOneRuBlogModule {}
