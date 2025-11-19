import { Component, computed, effect, inject, signal } from '@angular/core';
import { AuthApi } from '../../data-access/auth.api';
import { AuthStore } from '../../data-access/auth.store';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private _authStore = inject(AuthStore);
  private _authApi = inject(AuthApi);

  setUserData() {
    this._authStore.setUser({
      username: 'admin',
      password: 'admin',
    });
  }
}
