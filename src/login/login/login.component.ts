import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'; 
import {  MatCardModule } from '@angular/material/card';
import { AuthService } from '../../app/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { serialize } from 'v8';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private service:AuthService, private fb: FormBuilder, private router: Router){
      this.myForm = this.fb.group({
          email:['',[Validators.required, Validators.email]],
          password: ['', [Validators.required,Validators.minLength(6)]]
      })
  }

  ngOnInit(){
    if(this.service.getToken("jwt") !== null){
      this.router.navigate(["/home"]);
    }
  }
onSubmit() {
 
  this.service.authorize(this.myForm.get("email")?.value, this.myForm.get("password")?.value).subscribe({
    next:(data)=>{
       this.service.setTokenToLocalStorage(data.jwt);
    },
    error: (err) =>{
      console.log("error",err)
    }
  });
}



}
