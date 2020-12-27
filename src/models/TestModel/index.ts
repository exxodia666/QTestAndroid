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
    name: string,
    answers: answer[]
}

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

    get computedRating(): number {
        return this.rating * 100;
    }

    fetchQuestions = async (id: string) => {
        this.questions = []
        this.status = status.pending;
        try {
            const res = await axios.get(`http://134.249.181.40:7777/api/${id}`);
            const questions: IQuestionTypes[] = res.data.questions.map(
                (item: ResponseType) => {
                    return new QuestionModel(item.question.id,
                        item.question.quiz_id,
                        item.question.wording,
                        item.question.text,
                        item.question.image,
                        item.question.is_multiple_choice,
                        item.choices.map(item => {
                            return new ChoiceModel(item.id, item.question_id, item.text)
                        }))
                })
            runInAction(() => {
                this.status = status.success
                this.questions = questions;
            })
        } catch (error) {
            runInAction(() => {
                this.status = status.error
            })
        }
    }

    sendAnswers = async (user: User) => {
        const reqObj: RequestType = {
            name: user.name,
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
            const res = await axios.post(`http://134.249.181.40:7777/api/${this.id}/answer/`, reqObj);
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


/*
const sendAnswers = ({ obj, id }) =>
  Axios.post(`http://134.249.181.40:7777/api/${id}/answer/`, obj);

//TODO NORMAL USER

function* workerSendData(action) {
  const reqObj = {
    name: action.payload.user,
    answers: action.payload.obj.map((item) => ({
      question_id: item.question.id,
      choices_id: item.choices
        .filter((i) => i.isSelected)
        .map((i) => {
          return i.id;
        }),
    })),
  };
  const res = yield call(sendAnswers, { obj: reqObj, id: action.payload.id });
  yield put(addResults(res));
}*/