import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageModule } from './homepage/homepage.module';
import { TradeModule } from './trade/trade.module';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./homepage/homepage.component').then(
            (m) => HomepageModule,
          ),
      },
      {
        path:'trade',
        loadChildren:()=> 
          import('./trade/trade.component').then(
              (m) => TradeModule,
        ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
