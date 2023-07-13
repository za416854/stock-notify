import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwStockComponent } from './tw-stock.component';
import { PathTree } from 'src/app/common/config';
const twStockRoutes: Routes = [
  { path: 'twMain', component: TwStockComponent },

]

@NgModule({
  declarations: [
    TwStockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(twStockRoutes)
  ]
})
export class TwStockModule { }
