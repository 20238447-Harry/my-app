import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './comps/navi/navi.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { GradeCalculatorComponent } from './grade-calculator/grade-calculator.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { UserInteractionComponent } from './comps/user-interaction/user-interaction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaviComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "Angular App";
  score : number = 99;
  getGrade() : string {return this.score >= 60 ? "PASS" : "FAIL"}
  currentYear : number = new Date().getFullYear();

  isDisabled: boolean = true;
  imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-2-hecrE9k6Ocr35eFueMeAwSQypQ16vnA&s";
  inputMax: number = 100;

  count: number = 0;
  typedText = "";
  lastKey: string = "";
  onClick(): void { this.count++; }
  onKey(event: KeyboardEvent): void { this.lastKey = event.key; }
  onInput(event: Event): void {
  this.typedText = (event.target as HTMLInputElement).value;}

  studentName: string = "Bogart";
  scores: number = 85;

  span: number = 2;
  ariaDesc: string = "User score input";
  userId: string = "u-042";
  isWide = true;

  isActive: boolean = false;
  hasError: boolean = true;
  size: string = "medium"; 
  toggleActive(): void { this.isActive = !this.isActive; }

  fontColor: string = "#1F3864";
bgColor: string = "#EBF3FB";
fontSize: number = 16; // used with .px suffix below

studentsName: string = "Harry";
  Score: number = 75;
  gradeColor: string = "#2E75B6";
  passing: boolean = true;
  colSpan: number = 2;
  isHighlighted: boolean = false;

  // ✅ Required Method
  getLetterGrade(): string {
    if (this.score >= 90) return "A";
    else if (this.score >= 80) return "B";
    else if (this.score >= 70) return "C";
    else if (this.score >= 60) return "D";
    else return "F";
  }
}
