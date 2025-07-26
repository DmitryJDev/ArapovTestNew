import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRuFourtyFourComponent } from './home-ru-fourty-four/home-ru-fourty-four.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeRuFourtyFourComponent }];

@NgModule({
  declarations: [HomeRuFourtyFourComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtyFourRuArtickleModule {}
