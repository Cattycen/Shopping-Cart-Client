import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  url = 'http://localhost:8088/api/addUser';

  constructor(private http: Http) {}

  getUser() {
    return this.http.get(this.url);
  }

  createUser(usernameText, emailText, passwordText) {
    return this.http.post(this.url, {username: usernameText, email: emailText, password: passwordText});
  }

}
