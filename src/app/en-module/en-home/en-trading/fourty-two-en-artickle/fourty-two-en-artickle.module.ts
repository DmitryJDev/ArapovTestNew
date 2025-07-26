import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnFourtyTwoComponent } from './home-en-fourty-two/home-en-fourty-two.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeEnFourtyTwoComponent }];

@NgModule({
  declarations: [HomeEnFourtyTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FourtyTwoEnArtickleModule {}
