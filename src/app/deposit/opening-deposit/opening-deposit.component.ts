import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  AccountNumber: String;
  DepositAmount: string;
  Interest: string;
  TotalAmount: String;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { AccountNumber: 'xxxxxxxx1234', DepositAmount: '12,000.00', Interest: '5.6%', TotalAmount: '13,000.00', },
  { AccountNumber: 'xxxxxxxx1234', DepositAmount: '12,000.00', Interest: '5.6%', TotalAmount: '13,000.00', },
  { AccountNumber: 'xxxxxxxx1234', DepositAmount: '12,000.00', Interest: '5.6%', TotalAmount: '13,000.00', },
  { AccountNumber: 'xxxxxxxx1234', DepositAmount: '12,000.00', Interest: '5.6%', TotalAmount: '13,000.00', },
  { AccountNumber: 'xxxxxxxx1234', DepositAmount: '12,000.00', Interest: '5.6%', TotalAmount: '13,000.00', },
  { AccountNumber: 'xxxxxxxx2312', DepositAmount: '10,000.00', Interest: '4.6%', TotalAmount: '11,000.00', },

];

@Component({
  selector: 'app-opening-deposit',
  templateUrl: './opening-deposit.component.html',
  styleUrls: ['./opening-deposit.component.scss']
})
export class OpeningDepositComponent implements OnInit {
  displayedColumns: string[] = ['AccountNumber', 'DepositAmount', 'Interest', 'TotalAmount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
