import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { DynamicControlType } from './models/dynamic-control-type';

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

  public getTypes() : Observable<HttpEvent<string[]>> {
    let options = this.getStandardOptions();
   
    return this.http.get<string[]>('credential-types.json', options);
  }

  public getFormDefinition() : Observable<HttpEvent<DynamicControlType[]>> {
      let options = this.getStandardOptions();
      return this.http.get<DynamicControlType[]>('credentials-europcar.json', options);
  }
}
