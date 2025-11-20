import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private users = [{ username: 'admin', password: 'admin' }];
  private baseUrl = 'http://localhost:3000';

  private httpService = inject(HttpClient);

  verifyUser(username: string, password: string): boolean {
    console.log('Verifying user...');
    return this.users.some((user) => user.username === username && user.password === password);
  }

  isLoggedIn(): boolean {
    // For now, return true to allow access
    return false;
  }
}
