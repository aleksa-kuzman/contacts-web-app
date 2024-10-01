import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { ContactsComponent } from '../contacts/contacts/contacts.component';
import { AddContactsComponent } from '../contacts/add-contacts/add-contacts/add-contacts.component';
import { authGuard } from '../login/auth.guard';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'home', component:ContactsComponent, canActivate: [authGuard]},
    {path: 'contacts/add', component:AddContactsComponent,canActivate: [authGuard]}

];
