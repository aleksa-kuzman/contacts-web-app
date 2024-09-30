import { Injectable } from '@angular/core';
import { catchError, Observable,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api'
  
  constructor(private http: HttpClient) { }

  public  getData(): Observable<any> {
    
      return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
   
  }
  public handleError(error: HttpErrorResponse){
      return throwError("Error occured");
  }
}
