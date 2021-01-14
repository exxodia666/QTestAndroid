import { IChoiceTypes } from './../ChoicesModel/IChoices';
import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { IQuestionTypes } from "../QuestionModel/IQuestionTypes";
import ITestTypes from "./ITestTypes";
import QuestionModel from '../QuestionModel';
import status from "../../enum/status";
import axios from "axios";
import ChoiceModel from "../ChoicesModel/ChoiceModel";
import User from '../UserModel/UserTypes';

type answer = {
    question_id: string,
    choices_id: string[]
}
type RequestType = {
    dude_id: string,
    answers: answer[]
}

// {
//     "dude_id": "928cdff8-2542-45b5-bddc-c3574da82663",
//         "answers": [{
//             "question_id": "c0a9fa29-1e0a-433d-9f54-090e8a98e765",
//             "choices_id": ["1892bb83-41dd-424c-b4c2-dec920c0c0e9", "8e305407-3dba-4794-93b8-3cfb9376957f"]
//         },
//         {
//             "question_id": "391b2ca1-dcf3-4b45-81b4-84a9764cfb17",
//             "choices_id": ["f2915eca-f49d-4aae-b348-e0380125d11b"]
//         }]
// }



type ResponseType = {
    choices: IChoiceTypes[],
    question: IQuestionTypes
}

class TestModel implements ITestTypes {
    id = '';
    quiz_name = '';
    creation_date = new Date();
    questions_count: number = 0;
    questions: IQuestionTypes[] = [];
    status = status.pending;
    rating = 0;

    constructor(id: string,
        quiz_name: string,
        creation_date: Date,
        questions_count: number,
        questions: IQuestionTypes[]) {
        this.id = id;
        this.questions_count = questions_count;
        this.quiz_name = quiz_name;
        this.creation_date = creation_date;

        makeObservable(this, {
            rating: observable,
            id: observable,
            creation_date: observable,
            questions_count: observable,
            quiz_name: observable,
            questions: observable,
            fetchQuestions: action,
            sendAnswers: action,
            computedRating: computed
        })
    }

    get computedRating() {
        return this.rating * 100;
    }

    fetchQuestions = async (id: string) => {
        this.questions = []
        this.status = status.pending;
        try {
            const res = await axios.get(`http://134.249.181.40:7777/api/${id}`);
            const questions: IQuestionTypes[] = res.data.questions.map(
                (item: ResponseType) => {
                    console.log(item)
                    return new QuestionModel(item.question.id,
                        item.question.quiz_id,
                        item.question.wording,
                        item.question.text,
                        item.question.image,
                        item.question.is_multiple_choice,
                        item.choices.map(i => {
                            return new ChoiceModel(i.id, i.question_id, i.text)
                        }))
                })

            runInAction(() => {
                this.status = status.success
                this.questions = questions;
            })
        } catch (error) {
            runInAction(() => {
                console.log('ERROR')
                this.status = status.error
            })
        }
    }

    sendAnswers = async (user: User) => {
        const reqObj: RequestType = {
            dude_id: user.id,
            answers: this.questions.map(item => {
                const answer: answer = {
                    question_id: item.id,
                    choices_id: item.choices.filter((i: IChoiceTypes) =>
                        i.isSelected === true
                    ).map(i => i.id)
                }
                return answer;
            })
        }
        try {
            //console.log(reqObj);
            const res = await axios.post(`http://134.249.181.40:7777/api/${this.id}/answer/`, reqObj);
            //console.log(res)
            runInAction(() => {
                console.log('res:' + res.data.rating);
                this.rating = res.data.rating;
            })
        } catch (error) {
            runInAction(() => {
                console.log('Error');
                console.log(error);
            })
        }
    }
}
export default TestModel;