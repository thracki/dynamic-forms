import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

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
    options.params = new HttpParams({fromObject: {
      format: 'json'
    }});

    return this.http.get<string[]>('credential-types.json', options);
  }

  
}
