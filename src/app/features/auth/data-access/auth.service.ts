import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [{ username: 'admin', password: 'admin' }];
  private baseUrl = 'http://localhost:3000';

  private httpService = inject(HttpClient);

  private _accessToken = signal<string | null>(localStorage.getItem('token') || 'hola mundo');

  accessToken = this._accessToken.asReadonly();

  isAuthenticated = computed(() => this.accessToken() !== null);

  login(): void {
    // get token and set value
    this._accessToken.set('token'); // check if this is the best way to get or manage the value of access token
  }
}
