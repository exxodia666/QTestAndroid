import React from "react";
import ResultListModel from "./ResultsModel";
import ResultTypes from "./ResultsModel/ResultTypes";
import TestListModel from "./TestListModel";
import ITestTypes from "./TestModel/ITestTypes";
import UserModel from "./UserModel";
import User from "./UserModel/UserTypes";
//import { CounterStore } from "./CounterStore";

const initialTestListStore: ITestTypes[] = [{
    id: '215gagas152151',
    quiz_name: 'EBAL HUI',
    creation_date: new Date(),
    questions: [
        {
            id: 'fsafas',
            quiz_id: '215gagas152151',
            wording: 'dasfasfas',
            text: '',
            choices: [{ id: 'dasdas', question_id: 'fsafas', isSelected: false, text: 'dasfasfaf' }],
            //image: {'dsadasd'},
            is_multiple_choice: false,
        },
    ],
}];

const initialUserStore: User = {
    name: 'Sosanya',
    id: 'g1g13-21fvdfb-tgtbr4-3g4tgtr',
};


const initialResultListStore: ResultTypes[] = [{
    name: 'Sosanya',
    id: 'g1g13-21fvdfb-tgtbr4-3g4tgtr',
    rating: 100
}];

export const stores = Object.freeze({
    UserStore: new UserModel(initialUserStore.id, initialUserStore.name),
    TestListStore: new TestListModel(initialTestListStore),
    ResultListStore: new ResultListModel(initialResultListStore)
});
export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;