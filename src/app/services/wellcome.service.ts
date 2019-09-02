import {Injectable} from '@angular/core';
import {Member} from '../model/Member';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WellcomeService {

  token: string;

  constructor(public httpClient: HttpClient, public loginservice: LoginService) {
  }

  findAllMembers(): Observable<any> {
    this.token = 'Bearer ' + sessionStorage.getItem('token');
    console.log(this.loginservice.baseUrl + 'member/findAll');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.httpClient.post(this.loginservice.baseUrl + 'member/findAll', {salam: 'salam'}, httpOptions).pipe(map(res => {
      return res;
    }));
  }
}
