import {Injectable} from '@angular/core';
import {Member} from '../model/Member';
import {LoginDto} from '../model/LoginDto';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  member: LoginDto[];

  baseUrl = 'http://localhost:8085/';

  constructor(public httpclient: HttpClient) {
  }

  setMember() {
    this.member = [{username: 'bizhan', password: 'lari'}];
  }

  getMember(): Observable<LoginDto[]> {
    return of(this.member);
  }

  login(loginDto: LoginDto): Observable<any> {
    return this.httpclient.post(this.baseUrl + 'login' , loginDto);
  }
}
