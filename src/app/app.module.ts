import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomepageComponent } from './homepage/homepage.component';
import { TradeComponent } from './trade/trade.component';

=======
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { HoldingsComponent } from './Pages/holdings/holdings.component';
>>>>>>> 59e1c0b8951b71a9312758f7eb373845b0e0b788

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomepageComponent,
    TradeComponent,
    
=======
    HomeComponent,
    DashboardComponent,
    OrdersComponent,
    HoldingsComponent
>>>>>>> 59e1c0b8951b71a9312758f7eb373845b0e0b788
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
