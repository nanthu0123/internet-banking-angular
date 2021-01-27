import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-deposit',
  templateUrl: './user-deposit.component.html',
  styleUrls: ['./user-deposit.component.scss']
})
export class UserDepositComponent implements OnInit {
  // payment method 
  selectedTeansMethod: string;
  state: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  // payment method
  selectOption(eventVal) {
    console.log(eventVal);
    if (eventVal === "online-transfer") {
      this.selectedTeansMethod = "Account";
    } else {
      this.selectedTeansMethod = eventVal;
    }
    this.state = true;
  }


}
