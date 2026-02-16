import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { UserInteractionComponent } from './comps/user-interaction/user-interaction.component';
export const routes: Routes = [
    
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path : 'login',component : LoginComponent},
   { path: 'user-interaction', component: UserInteractionComponent }
];

