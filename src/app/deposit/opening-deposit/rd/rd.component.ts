import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.scss']
})
export class RDComponent implements OnInit {
  field: boolean = true;
  reviewfield: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    this.field = false;
    this.reviewfield = true;
  }
}
