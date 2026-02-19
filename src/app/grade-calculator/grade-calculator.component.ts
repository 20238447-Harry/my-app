import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-calculator',
  imports: [],
  templateUrl: 'grade-calculator.component.html',
  styleUrls: ['./grade-calculator.component.css']
})
export class GradeCalculatorComponent {
  studentName: string = "Harry";
  score: number = 75;
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
  updateStatus(): void {
  this.passing = this.score >= 60;
}

toggleHighlight(): void {
  this.isHighlighted = !this.isHighlighted;
}
}
