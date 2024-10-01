import { Component } from '@angular/core';
import { MatCell, MatHeaderCell, MatHeaderRow, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ContactsService } from '../../services/contacts.service';
import { HttpClient } from '@angular/common/http';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatTableModule, MatHeaderCell,MatCell, MatHeaderRow,MatIconModule],
  providers:[ContactsService],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
  
})
export class ContactsComponent {

  public mydata: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private contactService: ContactsService, private router: Router){
  }
  ngOnInit(){
    var dataSource = new MatTableDataSource()
     this.contactService.getContacts().subscribe({
      next:(data:any) =>{
        console.log(data);
        this.mydata = new MatTableDataSource(data);
      },
      error: (err: any) =>{
        console.log("error",err)
      }
     });
  }
  public displayColumns = ["id","name", "phoneNumber","deleteContact","editContact"] 

  delete(id: any) {
      this.contactService.deleteContact(id).subscribe({
        next:(data:any) =>{
          // Remove the deleted contact from the data source
          this.mydata.data = this.mydata.data.filter(contact => contact.id !== id);
          // Refresh the table
          this.mydata._updateChangeSubscription();
          console.log("Contact deleted successfully");
        },
        error: (err: any) =>{
          console.log("error",err)
        }
      })
  }

  edit(id: any) {
    var object = this.mydata.data.filter(m =>m.id === id );
    console.log("OBJ",object);
    this.router.navigate(["/contacts/add"],{state: {contact: object}})
    }

    logOut() {
      if(typeof(window) !== undefined )
        console.log("logout")
        window.localStorage.removeItem("jwt");
        this.router.navigate(["/contacts/add"])
      }

  goToAdd() {
    this.router.navigate(["/contacts/add"])
    }
    


}
