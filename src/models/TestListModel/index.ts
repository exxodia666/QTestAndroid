import axios from 'axios';
import { observable, action, makeObservable, runInAction } from 'mobx';
import TestModel from "../TestModel";
import ITestTypes from "../TestModel/ITestTypes";
import TestListType from './TestListTypes';
import ResponseType from './ResponseType'
import status from '../../enum/status';

class TestListModel implements TestListType {
    test_list: ITestTypes[] = [];
    status: status = status.success;

    constructor(test_list: ITestTypes[]) {
        makeObservable(this, {
            status: observable,
            test_list: observable,
            fetchTests: action
        })
        this.test_list = test_list.map(({ id, quiz_name, questions_count, creation_date, questions }: ITestTypes) => new TestModel(id, quiz_name, creation_date, questions_count, questions))
    }
    async fetchTests() {
        this.test_list = []
        this.status = status.pending;
        try {
            const res = await axios.get('http://134.249.181.40:7777/api/');
            const tests: ITestTypes[] = res.data.quizzes.map(({ id, creation_date, questions_count, quiz_name }: ResponseType) => new TestModel(id, quiz_name, creation_date, questions_count, []));
            runInAction(() => {
                this.status = status.success
                this.test_list = tests;
            })
        } catch (error) {
            runInAction(() => {
                this.status = status.error
            })
        }
    }
}
export default TestListModel;