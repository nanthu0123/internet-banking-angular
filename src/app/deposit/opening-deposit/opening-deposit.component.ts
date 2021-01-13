import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening-deposit',
  templateUrl: './opening-deposit.component.html',
  styleUrls: ['./opening-deposit.component.scss']
})
export class OpeningDepositComponent implements OnInit {

  rdfield:boolean=true;
  reviewrdfield:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

  rddetails(){
    this.rdfield=false;
    this.reviewrdfield=true;
  }

  reviewfield(){

  }

}
