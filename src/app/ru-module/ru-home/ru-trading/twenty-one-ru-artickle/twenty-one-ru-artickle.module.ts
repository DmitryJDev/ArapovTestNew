import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuTwentyOneComponent } from './home-ru-twenty-one/home-ru-twenty-one.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuTwentyOneComponent }];
@NgModule({
  declarations: [HomeRuTwentyOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TwentyOneRuArtickleModule {}
