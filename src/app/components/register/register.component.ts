import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Member} from '../../model/Member';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  lastName: string;
  username: string;
  password: string;
  message: string;
  registered = false;

  constructor(public reg: RegisterService) {
  }

  ngOnInit() {
  }

  register() {
    const mem = new Member();
    mem.password = this.password;
    mem.username = this.username;
    mem.name = this.name;
    mem.lastName = this.lastName;
    mem.id = 1;
    return this.reg.register(mem).subscribe(res => {
      if (res != null) {
        this.message = 'you registered successfully';
        this.registered = true;
      } else {
        this.message = 'your registration is failed';
        this.registered = false;
      }
    });
  }


}
