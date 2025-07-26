import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUkTwentyNineComponent } from './home-uk-twenty-nine/home-uk-twenty-nine.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeUkTwentyNineComponent }];
@NgModule({
  declarations: [HomeUkTwentyNineComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyNineUkArtickleModule {}
