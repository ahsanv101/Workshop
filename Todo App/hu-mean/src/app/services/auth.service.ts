import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginResp } from '../../models/login-resp';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  signed: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('todo-app_token');
  }

  login(credentials) {
    return this.http.post<LoginResp>(`${environment.apiBaseUrl}/user/login`, {
      user: credentials
    })
    .pipe(
      tap((response) => {
        this.token = response.user.token;
        localStorage.setItem('todo-app_token', this.token);
      })
    );
  }

  signup(credentials) {
    return this.http.post<LoginResp>('http://localhost:3000/user/signup', {
      user: credentials
    })
    .pipe(
      tap((response) => {
        this.signed = response.user.token;
      })
    );
  }


  logout() {
    this.token = '';
    localStorage.removeItem('todo-app_token');
  }
}
