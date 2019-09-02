import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {WellcomeComponent} from './components/wellcome/wellcome.component';
import {LoginService} from './services/login.service';
import {Route, RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterService} from './services/register.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guard/auth.guard';
import {WellcomeService} from './services/wellcome.service';


const routs: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'home', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', canActivate: [AuthGuard], component: WellcomeComponent},
//  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WellcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routs),
    HttpClientModule
  ],
  providers: [LoginService, RegisterService, AuthService, WellcomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
