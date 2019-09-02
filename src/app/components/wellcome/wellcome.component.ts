import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {WellcomeService} from '../../services/wellcome.service';
import {Member} from '../../model/Member';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {root} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  members: Member[];

  constructor(private welcomeService: WellcomeService, private authenticate: AuthService , private rout: Router) {
  }

  ngOnInit() {
  }


  findAll() {
    return this.welcomeService.findAllMembers().subscribe(res => {
      this.members = res;
      return res;
    });
  }


  logOut() {
    this.authenticate.logout();
  }


}
