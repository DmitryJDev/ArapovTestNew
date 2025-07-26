import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnTwentyOneComponent } from './home-en-twenty-one/home-en-twenty-one.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnTwentyOneComponent }];
@NgModule({
  declarations: [HomeEnTwentyOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyOneEnArtickleModule {}
