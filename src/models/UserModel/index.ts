import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import status from "../../enum/status";
import User from "./UserTypes";

class UserModel implements User {
    //todo persist this
    name: string = '';
    id: string = '';
    status?: status = status.pending;
    errors?: any = '';

    constructor(id: string, name: string) {
        makeObservable(this, {
            name: observable,
            id: observable,
            status: observable,
            errors: observable,
            authUser: action,
        })
        this.id = id;
        this.name = name;
    }

    async authUser(name: string) {
        this.name = ''
        this.status = status.pending;
        try {
            const res = await axios.post('http://134.249.181.40:7777/api/dudes', {
                dude: {
                    name
                }
            });
            // const tests: ResultTypes[] = res.data.quizzes.map(({ id, creation_date, questions_count, quiz_name }: ResponseType) => new TestModel(id, quiz_name, creation_date, questions_count, []));
            runInAction(() => {
                this.status = status.success
                // this.results = tests;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.status = status.error;
                this.errors = error;
            })
        }
    }


    // setName = (newName: string): void => {
    //     this.name = newName
    // }
}
export default UserModel;