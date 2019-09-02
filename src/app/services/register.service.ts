import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../model/Member';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  member: Member;

  constructor(public http: HttpClient, public loginservice: LoginService) {
    this.member = new Member();
  }

  register(member: Member): Observable<Member> {
    return this.http.post<Member>(this.loginservice.baseUrl + 'save', member).pipe(map(res => {
      member.id = res.id;
      member.name = res.name;
      member.lastName = res.lastName;
      member.username = res.username;
      member.password = res.password;
      return member;
    }));
  }
}
