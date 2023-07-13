import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouriteStockComponent } from './my-favourite-stock.component';

describe('MyFavouriteStockComponent', () => {
  let component: MyFavouriteStockComponent;
  let fixture: ComponentFixture<MyFavouriteStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavouriteStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouriteStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add two numbers correctly', () => {
    const result = component.addNumbers(2, 3);
    expect(result).toBe(5);
  });

  it('should handle negative numbers', () => {
    const result = component.addNumbers(-5, 10);
    expect(result).toBe(5);
  });

  it('should handle zero', () => {
    const result = component.addNumbers(0, 5);
    expect(result).toBe(5);
  });
});
