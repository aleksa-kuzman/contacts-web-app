import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = 'http://localhost:5003/api/';
  private contact = 'contact';
  private storage: Storage | null = null;


  constructor(private http: HttpClient) { 
    if(typeof(window) !== 'undefined')
      {
        this.storage = window.localStorage;
      }
  }


  getContacts(): Observable<any> {
    console.log("HEAD"+ this.http.head)
   return this.http.get<any>(this.apiUrl + this.contact).pipe(catchError(this.handleError))
  }


  addContact(contact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + this.contact, contact).pipe(catchError(this.handleError));
  }

  updateContact(index: string, updatedContact: any): Observable<any> {
    let params = new HttpParams()
    .set("id",index);
   return this.http.patch<any>(this.apiUrl + this.contact,updatedContact,{params: params},).pipe(catchError(this.handleError));
  }

  deleteContact(index: string): Observable<any> {
    let params = new HttpParams()
    .set("id",index);

    return this.http.delete<any>(this.apiUrl + this.contact,{params: params}).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse){
    console.log("ERRRRR");
 
    return throwError("Error occured"+ error.message);
}

  
}
