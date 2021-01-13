import { observable, makeObservable } from 'mobx';
import ResultTypes from './ResultTypes';
class ResultModel implements ResultTypes {
    id: string = '';
    name: string = '';
    rating: number = 0;

    constructor(id: string, name: string, rating: number) {
        makeObservable(this, {
            rating: observable,
            id: observable,
            name: observable
        });
        this.id = id;
        this.name = name;
        this.rating = rating;
    }

    // async fetchResults() {

    //     try {
    //         // const res = await axios.get('http://134.249.181.40:7777/api/');
    //         // const tests: ITestTypes[] = res.data.quizzes.map(({ id, creation_date, questions_count, quiz_name }: ResponseType) => new TestModel(id, quiz_name, creation_date, questions_count, []));
    //         // runInAction(() => {
    //         //     this.status = status.success
    //         //     this.test_list = tests;
    //         // })
    //     } catch (error) {
    //         // console.log(error);
    //         // runInAction(() => {
    //         //     this.status = status.error;
    //         //     this.errors = error;
    //         // })
    //     }
    // }
}
export default ResultModel;