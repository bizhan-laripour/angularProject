import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {LoginDto} from '../../model/LoginDto';
import {Route} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  member: LoginDto[];

  constructor(public loginservice: LoginService , public rout: Route) {
  }

  ngOnInit() {
  }

  setMember() {
    this.loginservice.setMember();
  }

  getMember() {
    return this.loginservice.getMember().subscribe(res => {
      this.member = res;
    });
  }

}
