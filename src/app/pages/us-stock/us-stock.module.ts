import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsStockComponent } from './us-stock.component';
import { RouterModule, Routes } from '@angular/router';


const usStockRoutes:Routes=[
  { path: '', component: UsStockComponent },
]
@NgModule({
  declarations: [
    UsStockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(usStockRoutes)
  ]
})
export class UsStockModule { }
