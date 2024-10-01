import { Injectable } from '@angular/core';
import { catchError, Observable,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5003/api/'
  private userEndpoint = 'user/authorize'
  
  constructor(private http: HttpClient) { }

  public  getData(): Observable<any> {
     let obj = {
      email : "aleksa.kuzman.996@gmail.com",
      password: "password"
     }
      return this.http.post<any>(this.apiUrl+this.userEndpoint,obj).pipe(catchError(this.handleError));
   
  }

  public setTokenToLocalStorage(jwt: string)
  {
    localStorage.setItem("jwt",jwt);
  }

  public getToken()
  {
    localStorage.getItem("jwt");
  }

  public handleError(error: HttpErrorResponse){
      return throwError("Error occured"+ error.message);
  }
}
