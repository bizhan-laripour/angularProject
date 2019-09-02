import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public log: boolean;

  constructor() {
  }

  login() {
    localStorage.setItem('login', 'true');
  }

  logout() {
    localStorage.setItem('login', 'false');
  }

  isAdmin() {
    if (localStorage.getItem('login') === 'false') {
      this.log = false;
    } else {
      this.log = true;
    }
    localStorage.setItem('log', 'isLoged');
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.log);
    });
    return isUserAdmin;
  }


  getLog(): boolean {
    if (localStorage.getItem('log') != null) {
      return true;
    } else {
      return false;
    }
  }
}
