import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  showWelcome = true;
  list = [1, 2, 3, 4, 5];

  // states
  myName = signal('');
  counter = signal(0);

  // obtiene un valor y se actualiza cuando el valor de un signal o state cambia
  double = computed(() => this.counter() * 2);

  constructor() {
    // similar a un useEffect, depende de los signal que estan en su callback o dentro de el
    effect(() => {
      console.log('My name is:', this.myName());
      console.log('Counter:', this.counter());
      console.log('Double:', this.double());
    });
  }

  changeName() {
    // this.myName.set('John Doe');
    this.counter.update((counter) => counter + 1);
  }
}
