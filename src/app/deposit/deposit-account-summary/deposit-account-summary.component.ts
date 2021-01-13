import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit-account-summary',
  templateUrl: './deposit-account-summary.component.html',
  styleUrls: ['./deposit-account-summary.component.scss']
})
export class DepositAccountSummaryComponent implements OnInit {
  reviewrdfield:boolean=false;
  fd_rd_field:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  movetodetailspage(){
    this.fd_rd_field=false;
    this.reviewrdfield=true;
  }

}
