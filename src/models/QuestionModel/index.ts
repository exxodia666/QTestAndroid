import ChoiceModel from '../ChoicesModel/ChoiceModel';
import { IChoiceTypes } from './../ChoicesModel/IChoices';
import { IQuestionTypes } from './IQuestionTypes';
class QuestionModel implements IQuestionTypes {
    id = 'string';
    quiz_id = '';
    wording = '';
    text = '';
    image = '';
    is_multiple_choice = false;
    choices: IChoiceTypes[] = [];

    constructor(id: string,
        quiz_id: string,
        wording: string,
        text: string | undefined,
        image: string | undefined,
        is_multiple_choice: boolean,
        choices: IChoiceTypes[]) {
        this.id = id;
        this.quiz_id = quiz_id;
        this.wording = wording;
        this.text = text || '';
        this.image = image || '';
        this.is_multiple_choice = is_multiple_choice;
        this.choices = choices.map(e => new ChoiceModel(e.id, e.question_id, e.text));
    }
}
export default QuestionModel;