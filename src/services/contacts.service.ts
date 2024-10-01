import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = 'http://localhost:5003/api/';
  private contact = 'contact';


  constructor(private http: HttpClient) { 

  }


  getContacts(): void {
   this.http.get<any>(this.apiUrl + this.contact).pipe(catchError(this.handleError))
  }


  addContact(contact: any): void {
    this.http.post<any>(this.apiUrl + this.contact, contact).pipe(catchError(this.handleError));
  }

  updateContact(index: string, updatedContact: any): void {
    let params = new HttpParams()
    .set("id",index);
   this.http.patch<any>(this.apiUrl + this.contact,updatedContact,{params: params},).pipe(catchError(this.handleError));
  }

  deleteContact(index: number): void {
    let params = new HttpParams()
    .set("id",index);

    this.http.delete<any>(this.apiUrl + this.contact,{params: params}).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse){
    return throwError("Error occured"+ error.message);
}

  
}
