import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnTwentyEightComponent } from './home-en-twenty-eight/home-en-twenty-eight.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnTwentyEightComponent }];
@NgModule({
  declarations: [HomeEnTwentyEightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyEightEnArtickleModule {}
