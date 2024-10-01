import { Injectable } from '@angular/core';
import { catchError, Observable,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5003/api/'
  private userEndpoint = 'user/authorize'
  private storage: Storage | null = null;

  
  constructor(private http: HttpClient) { 
    if(typeof(window) !== 'undefined')
    {
      this.storage = window.localStorage;
    }
  }
  
  public  authorize( email:string,  password:string): Observable<any> {
     let obj = {
      email : email,
      password: password
     }
      return this.http.post<any>(this.apiUrl+this.userEndpoint,obj).pipe(catchError(this.handleError));
  }

  public setTokenToLocalStorage(jwt: string)
  {
    console.log("succesfully set jwt ", jwt);
    if(this.storage !== null)
    {
      this.storage.setItem("jwt",jwt);
    }
  }

  public getToken(tokenName:string): string | null
  {
     var jwt = this.storage ? this.storage.getItem(tokenName) : null;
     if(jwt == null)
      return null;

     return jwt;
  }

  public handleError(error: HttpErrorResponse){
      return throwError("Error occured"+ error.message);
  }
}
