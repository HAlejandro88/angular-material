import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MomentModule } from 'angular2-moment';
import 'hammerjs';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
