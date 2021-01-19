import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.scss']
})
export class BillPaymentComponent implements OnInit {

  transacfield: boolean = true;
  onetimepwd: boolean = false;
  selectBiller: boolean = true;
  billerDetails: Boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  Quicktran() {
    this.transacfield = false;
    this.onetimepwd = true;

  }

  otp(smallModalContent) {
    this.modalService.open(smallModalContent, { size: 'sm' });
  }
}
