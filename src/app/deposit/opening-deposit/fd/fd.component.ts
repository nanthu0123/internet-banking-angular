import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {FdserviceService} from '/home/codoid-dev/internet-banking-angular/src/app/deposit/fdservice.service.ts';

@Component({
  selector: 'app-fd',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.scss']
})
export class FDComponent implements OnInit {

  form: boolean = true;
  schemes: Boolean = false;
  preview: boolean = false;
  submitted = false;
  FDDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.FDDetailsForm = this.formBuilder.group({
      Amount: new FormControl("", [Validators.required]),    
      user_ID: new FormControl("", [Validators.required]),    
      Nominee_name: new FormControl("", [Validators.required]),    
      Nominee_type: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),    
    }) 
  }

  get f() {
    return this.FDDetailsForm.controls;
  }

  toSchemes() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.FDDetailsForm.invalid) {
      return;
    }
    // this.form = false;
    // this.schemes = true;

    let formData = new FormData();
    let _Formdata = this.FDDetailsForm.value;
    
    
    var year=0;
    var month=0;
    var amount=0;
    amount = _Formdata['Amount']
    year=_Formdata['year']
    month= _Formdata['month']
    var Maturity_months= Number(year*12)+Number(month);
    
    Object.entries(_Formdata).forEach(([key, values]) => {      
      formData.append(key, values.toString())     
    })

    formData.append("Maturity_months", Maturity_months.toString());
    formData.append("Deposit_type", "FD");
    formData.append("Return_pay_method", "DD");
    formData.append("DD_No", "CVFD34567890");
    formData.append("Payment_account_number", "");
    formData.append("User_type", "exit");  

    console.log(formData)

    // return this._fdService.FDService(formData,Maturity_months,amount).subscribe(
    //   res => {
    //     // this.NextBtn = true;

    //     alert(res)

    //   },
    //   err => {
    //     // this.NextBtn = false;
    //     alert(err)
    //   },)
    
  }
  
  toPreview() {
    this.preview = true;
    this.schemes = false;
  }
}
