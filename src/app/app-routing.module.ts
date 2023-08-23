import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForSalePageComponent } from './for-sale-page/for-sale-page.component';
import { ToRentPageComponent } from './to-rent-page/to-rent-page.component';
import { HousePricesPageComponent } from './house-prices-page/house-prices-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForSaleResultsComponent } from './results/for-sale-results.component';
import { ToRentResultsComponent } from './results/to-rent-results.component';

const routes: Routes = [
  { path: 'for-sale', component: ForSalePageComponent },
  { path: 'to-rent', component: ToRentPageComponent },
  { path: 'house-prices', component: HousePricesPageComponent },
  { path: 'for-sale-results', component: ForSaleResultsComponent },
  { path: 'to-rent-results', component: ToRentResultsComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
