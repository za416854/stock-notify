import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceNotifySettingComponent } from './price-notify-setting.component';

describe('PriceNotifySettingComponent', () => {
  let component: PriceNotifySettingComponent;
  let fixture: ComponentFixture<PriceNotifySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceNotifySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceNotifySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
