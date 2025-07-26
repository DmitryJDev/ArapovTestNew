import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEuBlogFiftyNineComponent } from './home-eu-blog-fifty-nine/home-eu-blog-fifty-nine.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEuBlogFiftyNineComponent }];

@NgModule({
  declarations: [HomeEuBlogFiftyNineComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FiftyNineEuBlogModule {}
