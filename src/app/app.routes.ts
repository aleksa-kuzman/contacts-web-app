import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { ContactsComponent } from '../contacts/contacts/contacts.component';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'home', component:ContactsComponent}
];
