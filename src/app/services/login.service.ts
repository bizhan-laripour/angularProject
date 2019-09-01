import {Injectable} from '@angular/core';
import {Member} from '../model/Member';
import {LoginDto} from '../model/LoginDto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  member: LoginDto[];

  constructor() {
  }

  setMember() {
    this.member = [{username: 'bizhan', password: 'lari'}];
  }

  getMember(): Observable<LoginDto[]> {
    return of(this.member);
  }
}
