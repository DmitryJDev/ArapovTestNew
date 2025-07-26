import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnBlogFourtyOneComponent } from './home-en-blog-fourty-one/home-en-blog-fourty-one.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEnBlogFourtyOneComponent }];

@NgModule({
  declarations: [HomeEnBlogFourtyOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtyOneEnBlogModule {}
