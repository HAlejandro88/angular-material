import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: Question = new Question(
    'Esta es una pregunta',
    'Hola, tengo una duda de como exportar una clase',
    new Date,
    'devicon-android-plain'
  );
  constructor() { }

  ngOnInit() {
  }

}
