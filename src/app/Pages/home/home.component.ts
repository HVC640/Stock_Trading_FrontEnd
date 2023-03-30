import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrCompany = [
    { name: "TANLA", change: -29.10, changePercent: "-5.40%", value: 509.80 },
    { name: "ATUL", change: 53.05, changePercent: "0.77%", value: 6974.60 },
    { name: "EPL", change: 6.80, changePercent: "4.35%", value: 163.10 },
    { name: "IRCON", change: -0.25, changePercent: "-0.47%", value: 52.90 }
  ]

}
