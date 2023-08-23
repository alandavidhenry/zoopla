import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { ForSalePageComponent } from './for-sale-page/for-sale-page.component';
import { ToRentPageComponent } from './to-rent-page/to-rent-page.component';
import { HousePricesPageComponent } from './house-prices-page/house-prices-page.component';
import { ForSaleResultsComponent } from './results/for-sale-results.component';
import { ToRentResultsComponent } from './results/to-rent-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ForSalePageComponent,
    ToRentPageComponent,
    HousePricesPageComponent,
    ForSaleResultsComponent,
    ToRentResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
