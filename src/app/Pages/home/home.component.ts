import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private companyService: CompanyServiceService) { }
  arrCompany: any = [];

  ngOnInit(): void {
    this.getCompaniesData();
  }

  quantity = new FormControl(1);
  price = 15.01;
  companyId: number = 102;
  description: string = "";

  getCompaniesData() {
    this.arrCompany = this.companyService.getAllCompanies().subscribe(data => this.arrCompany = data);
    console.log(this.arrCompany);
  }

  changeCompanyId(id: number) {
    this.companyId = id;
    this.description = this.arrCompany.find(x => x.id == this.companyId).companyDescription;
  }


}
