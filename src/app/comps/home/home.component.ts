import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-home',
  standalone : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-cute-cat-cat-kawaii-chibi-drawing-style-cat-cartoon-png-image_12965065.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();

  title : string = "Angular App";
  score : number = 99;
  getGrade() : string {return this.score >= 60 ? "PASS" : "FAIL"}
  currentYear : number = new Date().getFullYear();

  isDisabled: boolean = true;
  imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4zBY27iDTeBbVK_Xa6A-N394p1qoqh7Bag&s";
  inputMax: number = 100;

  count: number = 0;
  typedText = "";
  lastKey: string = "";
  onClick(): void { this.count++; }
  onKey(event: KeyboardEvent): void { this.lastKey = event.key; }
  onInput(event: Event): void {
  this.typedText = (event.target as HTMLInputElement).value;}

  studentName: string = "Harry";
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
  isHighLighted: boolean = false;

  // ✅ Required Method
  getLetterGrade(): string {
    if (this.score >= 90) return "A";
    else if (this.score >= 80) return "B";
    else if (this.score >= 70) return "C";
    else if (this.score >= 60) return "D";
    else return "F";
  }
}
