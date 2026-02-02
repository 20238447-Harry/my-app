import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 imports: [NaviComponent],
 imports: [LoginComponent]
})
export class AppComponent {
  title = 'my-app';
}
