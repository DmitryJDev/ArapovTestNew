import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEuBlogFiftyFourComponent } from './home-eu-blog-fifty-four/home-eu-blog-fifty-four.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEuBlogFiftyFourComponent }];

@NgModule({
  declarations: [HomeEuBlogFiftyFourComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FiftyFourEuBlogModule {}
