import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'; 
import {  MatCardModule } from '@angular/material/card';
import { AuthService } from '../../app/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { serialize } from 'v8';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
  ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {
  myForm: FormGroup;
  test: any;

  constructor(private service:AuthService, private fb: FormBuilder){
      this.myForm = this.fb.group({

      })
  }
onSubmit() {
 console.log("TEST")

  this.service.getData().subscribe({
    next:(data)=>{
       this.service.setTokenToLocalStorage(data.jwt);
    },
    error: (err) =>{
      console.log("error",err)
    }
  });
}



}
