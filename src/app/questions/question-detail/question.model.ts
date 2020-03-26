import { Answer } from './../../answer/answer.model';
export class Question {
    title: string;
    description: string;
    createdAt?: Date;
    icon?: string; //? significa opcional 
    answer: Answer[];

    constructor(title:string, desciption: string, createAt?: Date, icon?: string) {
        this.title = title;
        this.description = desciption;
        this.createdAt = createAt;
        this.icon = icon;
        this.answer = [];
    }
}