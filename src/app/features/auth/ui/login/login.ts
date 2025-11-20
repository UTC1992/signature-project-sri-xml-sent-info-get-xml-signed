import { Component, computed, effect, inject, signal } from '@angular/core';
import { AuthApi } from '../../data-access/auth.api';
import { AuthStore } from '../../data-access/auth.store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login {
  private _authStore = inject(AuthStore);
  private _authApi = inject(AuthApi);

  private _formBuilder = inject(FormBuilder);

  loginForm = this._formBuilder.group({
    email: this._formBuilder.nonNullable.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Send form', this.loginForm.getRawValue());
    } else {
      this.loginForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
