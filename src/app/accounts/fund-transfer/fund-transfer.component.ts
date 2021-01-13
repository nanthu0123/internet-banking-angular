import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.scss']
})
export class FundTransferComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  edittran(editModalContent){
    this.modalService.open( editModalContent, { size : 'sm' } );
  }

  deletetran(deleteModalContent){
    this.modalService.open( deleteModalContent, { size : 'sm' } );
  }

}
