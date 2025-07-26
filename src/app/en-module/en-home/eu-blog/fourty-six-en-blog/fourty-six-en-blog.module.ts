import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnBlogFourtySixComponent } from './home-en-blog-fourty-six/home-en-blog-fourty-six.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEnBlogFourtySixComponent }];

@NgModule({
  declarations: [HomeEnBlogFourtySixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtySixEnBlogModule {}
