import { Answer, User } from './answer.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../questions/question-detail/question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //console.log(form.value.description);
     const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User('Alejandro', 'Soto' )
      );
    
    this.question.answer.unshift(answer);
    form.reset(); 
  }

}
