import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispute-transaction',
  templateUrl: './dispute-transaction.component.html',
  styleUrls: ['./dispute-transaction.component.scss']
})
export class DisputeTransactionComponent implements OnInit {
  panelOpenState = false;
  firstFormGroup = true;
  secondFormGroup = true;
  thirdFormGroup = true;
  constructor() { }

  ngOnInit(): void {
  }

}
