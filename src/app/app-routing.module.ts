import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathTree } from './common/config';
import { TwStockComponent } from './pages/tw-stock/tw-stock.component';
import { UsStockComponent } from './pages/us-stock/us-stock.component';
import { AuthGuard } from './core/interceptor/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: 'us-stock', component: UsStockComponent },
  // { path: 'tw-stock', component: TwStockComponent },
  /******************************************************************************
   **  首頁
  ******************************************************************************/
  {
    path: PathTree.path.home.url, loadChildren: () =>
    import('./pages/home/home.module')
      .then(m => m.HomeModule) //, canActivate: [AuthGuard]
  },  // 首頁
  {
    path: PathTree.path.tw.twStockManagement.twStockQuery.url,
    loadChildren: () =>
      import('./pages/tw-stock/tw-stock.module')
        .then(m => m.TwStockModule) //, canActivate: [AuthGuard]
  },
  {
    path: PathTree.path.us.usStockManagement.usStockQuery.url,
    loadChildren: () =>
      import('./pages/us-stock/us-stock.module')
        .then(m => m.UsStockModule) //, canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  //useHash: false:可以拿掉網址的/# 符號
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload', enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
