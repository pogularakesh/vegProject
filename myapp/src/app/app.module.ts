import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AddvegComponent } from './addveg/addveg.component';
import { ShowallComponent } from './showall/showall.component';
import { EditComponent } from './edit/edit.component';
import { VegdetailsComponent } from './vegdetails/vegdetails.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { RegisterComponent } from './register/register.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{ path: '', component: VegetablesComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path:'addveg', component: AddvegComponent },
{ path: 'Edit/:id', component: EditComponent },
{ path: 'VegDetails/:id', component: VegdetailsComponent },
{ path:'showall', component: ShowallComponent },
{ path:'home', component: HomeComponent },
{ path: 'ulogin', component: UloginComponent },
{ path:'cart', component: CartComponent },
{ path:'contact', component: ContactComponent },
//{ path:'vegetables', component: VegetablesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UloginComponent,
    AddvegComponent,
    ShowallComponent,
    EditComponent,
    VegdetailsComponent,
    HomeComponent,
    CartComponent,
    VegetablesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
