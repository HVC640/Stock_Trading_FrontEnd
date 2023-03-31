import { Component } from '@angular/core';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  ngOnInit(): void {
    this.getOrderData(103);
  }

  constructor(private companyService: CompanyServiceService) { }
  arrOrder: any = [];

  getOrderData(id: number) {
    this.arrOrder = this.companyService.getOrderById(id).subscribe(data => this.arrOrder = data);
    console.log(this.arrOrder);
  }
}
