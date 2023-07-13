import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsStockComponent } from './us-stock.component';

describe('UsStockComponent', () => {
  let component: UsStockComponent;
  let fixture: ComponentFixture<UsStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
