import { Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { UserInteractionComponent } from './comps/user-interaction/user-interaction.component';
import { GradeCalculatorComponent } from './comps/grade-calculator/grade-calculator.component';
import { InterpolationComponent } from './comps/interpolation/interpolation.component';
import { PropertyBindingComponent } from './comps/property-binding/property-binding.component';
export const routes: Routes = [
    
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path : 'login',component : LoginComponent},
   { path: 'user-interaction', component: UserInteractionComponent },
    { path: 'grade-calculator', component: GradeCalculatorComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'property-binding', component: PropertyBindingComponent }
   
];

