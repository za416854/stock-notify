import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourite-stock',
  templateUrl: './my-favourite-stock.component.html',
  styleUrls: ['./my-favourite-stock.component.scss']
})
export class MyFavouriteStockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addNumbers(a: number, b: number): number {
    return a + b;
  }
}
