import { Component } from '@angular/core';
import { MatCell, MatHeaderCell, MatHeaderRow, MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatTableModule, MatHeaderCell,MatCell, MatHeaderRow],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  public displayColumns = ["email","name", "phone"] 

  public mydata: MatTableDataSource<any> = new MatTableDataSource( [
    {email: "aleksa.kuzman.996@gmail.com", name: "Aleksa", phone: "0640052060"},
    {email: "john.doe@example.com", name: "John", phone: "1234567890"},
    {email: "jane.smith@example.com", name: "Jane", phone: "9876543210"},
    {email: "mike.johnson@example.com", name: "Mike", phone: "5551234567"},
    {email: "emily.brown@example.com", name: "Emily", phone: "7778889999"},
    {email: "david.wilson@example.com", name: "David", phone: "3334445555"},
    {email: "sarah.taylor@example.com", name: "Sarah", phone: "6667778888"},
    {email: "chris.anderson@example.com", name: "Chris", phone: "2223334444"},
    {email: "lisa.martinez@example.com", name: "Lisa", phone: "8889990000"},
    {email: "robert.garcia@example.com", name: "Robert", phone: "4445556666"},
    {email: "jennifer.lopez@example.com", name: "Jennifer", phone: "1112223333"},
    {email: "william.clark@example.com", name: "William", phone: "9990001111"},
    {email: "olivia.rodriguez@example.com", name: "Olivia", phone: "7776665555"},
    {email: "james.lee@example.com", name: "James", phone: "3332221111"},
    {email: "emma.gonzalez@example.com", name: "Emma", phone: "5554443333"}
  ]);

}
