import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TwStockComponent } from './pages/tw-stock/tw-stock.component';
import { UsStockComponent } from './pages/us-stock/us-stock.component';
import { MyFavouriteStockComponent } from './pages/my-favourite-stock/my-favourite-stock.component';
import { PriceNotifySettingComponent } from './pages/price-notify-setting/price-notify-setting.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyFavouriteStockComponent,
    PriceNotifySettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
