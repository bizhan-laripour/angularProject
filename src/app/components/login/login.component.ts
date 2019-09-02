import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {LoginDto} from '../../model/LoginDto';
import {Route, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  member: LoginDto[];
  token: string;
  message: string;

  constructor(public loginservice: LoginService, public authService: AuthService, public rout: Router) {
  }

  ngOnInit() {

    if (this.authService.getLog()) {
      this.rout.navigate(['/welcome']);
    } else {
      this.rout.navigate(['']);
    }
  }

  setMember() {
    this.loginservice.setMember();
  }

  getMember() {
    return this.loginservice.getMember().subscribe(res => {
      this.member = res;
      return this.rout.navigate(['register']);
    });
  }

  login() {
    const loginDto = new LoginDto();
    loginDto.username = this.username;
    loginDto.password = this.password;
    return this.loginservice.login(loginDto).subscribe(res => {
      this.token = res.result;
      // sessionStorage.setItem('token' , this.token);
      if (this.token != null) {
        this.authService.login();
        this.rout.navigate(['welcome']);
      } else {
        this.message = 'username or password is incorrect';
        this.rout.navigate(['']);
      }
    });
  }

  logOut() {
    this.authService.logout();
  }
}
