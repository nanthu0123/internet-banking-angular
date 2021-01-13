import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {

  transacfield:boolean=true;
  onetimepwd:boolean=false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  Quicktran(){
    this.transacfield=false;
    this.onetimepwd=true;
    
  }

  otp(smallModalContent){
    this.modalService.open( smallModalContent, { size : 'sm' } );
  }

}
