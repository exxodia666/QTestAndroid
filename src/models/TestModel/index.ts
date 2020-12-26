import { computed, makeObservable, observable } from "mobx";
import { IQuestionTypes } from "../QuestionModel/IQuestionTypes";
import ITestTypes from "./ITestTypes";
import QuestionModel from '../QuestionModel';

class TestModel implements ITestTypes {
    id = '';
    quiz_name = '';
    creation_date = new Date();
    questions_count: number = 0;

    constructor(id: string,
        quiz_name: string,
        creation_date: Date,
        questions_count: number) {

        makeObservable(this, {
            id: observable,
            creation_date: observable,
            questions_count: observable,
            quiz_name: observable,
        }

        )
        this.id = id;
        this.questions_count = questions_count;
        this.quiz_name = quiz_name;
        this.creation_date = creation_date;
        // this.questions = questions.map(({ id, quiz_id, wording, is_multiple_choice, text, choices, image
        // }: IQuestionTypes) => new QuestionModel(id, quiz_id, wording, text, image, is_multiple_choice, choices))
        // this.id = id;
        // this.creation_date = creation_date;
        // this.questions = questions;
        // this.quiz_name = quiz_name;
    }
    // get question_count(): number {
    //     return this.questions.length;
    // }
}
export default TestModel;