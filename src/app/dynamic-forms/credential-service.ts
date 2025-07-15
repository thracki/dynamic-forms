import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DynamicControlType } from './models/dynamic-control-type';
import { FormTypeDefinition } from './models/form-type-definition';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private http: HttpClient) {}

    private getStandardOptions() : any  {
    return {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getTypes() : Observable<HttpEvent<FormTypeDefinition[]>> {
    let options = this.getStandardOptions();
   
    return this.http.get<FormTypeDefinition[]>('credential-types.json', options);
  }

  public getFormDefinition(url : string) : Observable<HttpEvent<DynamicControlType[]>> {
      let options = this.getStandardOptions();
      return this.http.get<DynamicControlType[]>(url, options);
  }

  store(payload: any) {
    console.log("Following credentials has been stored:");
    console.log(payload);

    // let options = this.getStandardOptions();
    // options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    // this.http.post('/supplier/1/credentials/', payload, options);
  }

}
