import { Component } from '@angular/core';

Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'assets/images/user-avatar.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
}
