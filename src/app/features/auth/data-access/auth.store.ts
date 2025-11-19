import { computed, Injectable, signal } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _user = signal<User | null>(null);

  user = computed(() => this._user());

  setUser(user: User | null) {
    this._user.set(user);
  }
}
