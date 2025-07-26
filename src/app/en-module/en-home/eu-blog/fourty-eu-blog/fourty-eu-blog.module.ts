import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEuBlogFourtyComponent } from './home-eu-blog-fourty/home-eu-blog-fourty.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEuBlogFourtyComponent }];

@NgModule({
  declarations: [HomeEuBlogFourtyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtyEuBlogModule {}
