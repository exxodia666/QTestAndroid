import { IQuestionTypes } from "../QuestionModel/IQuestionTypes";

export default interface ITestTypes {
    id: string
    quiz_name: string
    creation_date: Date
    questions_count: number
}