import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserHoldings } from './Pages/holdings/UserHoldings';
import { order } from './Pages/home/order';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http: HttpClient) { }

  getAllCompanies() {
    return this.http.get("http://localhost:8961/getAllCompanies");
  }

  getOrderById(id: number) {
    return this.http.get("http://localhost:8961/getOrders/" + id);
  }

  getUserHoldings(id: number) {
    return this.http.get("http://localhost:8961/getUserHoldings/" + id);
  }

  getUserHoldingsTotalInvestment(id: number) {
    return this.http.get("http://localhost:8961/findTotalInvestment/" + id);
  }

  getUserHoldingsCurrentValue(id: number) {
    return this.http.get("http://localhost:8961/findCurrentValue/" + id);
  }

  getUserHoldingsFindProfitLoss(id: number) {
    return this.http.get("http://localhost:8961/findProfitLoss/" + id);
  }

  insertOrder(orderObj: order) {
    return this.http.post('http://localhost:8961/insertOrder', orderObj);
  }

  insertHolding(userHoldingsObj: UserHoldings) {
    return this.http.post('http://localhost:8961/insertHoldings', userHoldingsObj);
  }
}
