import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FdserviceService {

  private headers = new HttpHeaders();
  BranchData = []
  constructor(private _http: HttpClient) { }

  private fdServiceURL = "http://0.0.0.0:5008/";

  private handleError(errorReponse: HttpErrorResponse) {


    console.log('Client side error ', errorReponse.error.message)

    return throwError(errorReponse.error.message)

  }

  FDService(formData,Maturity_months,amount) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.get<any>(this.fdServiceURL + 'getdepositscheme/view/' + Maturity_months+'/'+amount)
  }

}
