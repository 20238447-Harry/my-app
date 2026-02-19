import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-cute-cat-cat-kawaii-chibi-drawing-style-cat-cartoon-png-image_12965065.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
}
