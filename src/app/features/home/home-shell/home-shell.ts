import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-shell',
  imports: [RouterLink],
  templateUrl: './home-shell.html',
  styleUrl: './home-shell.scss',
  standalone: true,
})
export class HomeShell {}
