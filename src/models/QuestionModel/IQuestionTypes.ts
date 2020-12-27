import { IChoiceTypes } from './../ChoicesModel/IChoices';

export interface IQuestionTypes {
    id: string,
    quiz_id: string
    wording: string
    text: string
    image: string
    is_multiple_choice: boolean
    choices: IChoiceTypes[]
}