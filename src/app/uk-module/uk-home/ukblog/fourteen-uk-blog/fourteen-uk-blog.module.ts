import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkBlogFourteenComponent } from './home-uk-blog-fourteen/home-uk-blog-fourteen.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: HomeUkBlogFourteenComponent }];

@NgModule({
  declarations: [HomeUkBlogFourteenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourteenUkBlogModule {}
