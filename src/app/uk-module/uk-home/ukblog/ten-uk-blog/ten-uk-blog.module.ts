import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkBlogTenComponent } from './home-uk-blog-ten/home-uk-blog-ten.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeUkBlogTenComponent }];

@NgModule({
  declarations: [HomeUkBlogTenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TenUkBlogModule {}
