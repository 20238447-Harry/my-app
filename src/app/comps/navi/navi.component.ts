import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
  
})
export class NaviComponent {}

