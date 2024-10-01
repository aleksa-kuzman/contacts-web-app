import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../../services/contacts.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-contacts',
  standalone: true,
  imports: [ MatCardModule,
    MatButtonModule,
    MatInputModule,
  ReactiveFormsModule],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css',
  providers:[
    ContactsService
  ]
})
export class AddContactsComponent {


  insertForm: FormGroup;
  contact?: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contactService:ContactsService,
    private activeRouter: ActivatedRoute){

    this.insertForm = this.fb.group({
      phoneNumber:['',[Validators.required, Validators.email]],
      name: ['', [Validators.required,Validators.minLength(6)]]
    })
    
  }
  ngOnInit(){
    if(typeof(window) !== 'undefined')
    {
      this.activeRouter.paramMap.pipe(map(() => window.history.state)).subscribe(res =>{
        console.log(res);
        this.contact = res.contact[0];
        this.insertForm.patchValue({name: this.contact.name} );
        this.insertForm.patchValue({phoneNumber: this.contact.phoneNumber});
      })
    }
}


  onSubmit() {
    const contact = {
      phoneNumber: this.insertForm.get("phoneNumber")?.value,
      name: this.insertForm.get("name")?.value
    };

    if (this.contact !== undefined) {
       this.contactService.updateContact(this.contact.id,contact).subscribe({
        next:(data:any) => {
          this.router.navigate(["/home"])
        },
        error: (err:any) => {
          console.log("error", err);
        }
       })
    } else {
      this.contactService.addContact(contact).subscribe({
        next: (data) => {
          this.router.navigate(["/home"]);
        },
        error: (err) => {
          console.log("error", err);
        }
      });
    }
  }
}
