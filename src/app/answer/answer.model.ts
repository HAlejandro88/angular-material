import { Question } from '../questions/question-detail/question.model';

export class User {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}


export class Answer {
    constructor(
        public description: string,
        public question : Question,
        public createAt?: Date,
        public user?: User
    ) {}
}