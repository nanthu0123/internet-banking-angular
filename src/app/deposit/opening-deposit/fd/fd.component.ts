import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fd',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.scss']
})
export class FDComponent implements OnInit {

  rdfield: boolean = true;
  reviewrdfield: boolean = false;
  fdfield: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  rddetails() {
    this.rdfield = false;
    this.reviewrdfield = true;
    this.fdfield = false;
  }

  reviewfield() {

  }

  rdfd() {
    this.rdfield = false;
    this.fdfield = true;
  }

}
