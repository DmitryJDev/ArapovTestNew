import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEuBlogThirtySixComponent } from './home-eu-blog-thirty-six/home-eu-blog-thirty-six.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeEuBlogThirtySixComponent }];

@NgModule({
  declarations: [HomeEuBlogThirtySixComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ThirtySixEuBlogModule {}
