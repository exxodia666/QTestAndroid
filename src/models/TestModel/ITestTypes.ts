import status from "../../enum/status";
import { IQuestionTypes } from "../QuestionModel/IQuestionTypes";
import User from "../UserModel/UserTypes";

export default interface ITestTypes {
    id: string
    quiz_name: string
    creation_date: Date
    questions_count: number
    questions?: IQuestionTypes[] | null
    status: status
    rating?: number
    fetchQuestions: (id: string) => void
    sendAnswers: (user: User) => void
    computedRating: () => number
}