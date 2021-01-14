import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import status from "../../enum/status";
import { _retrieveData, _storeData } from "../AsyncStorage";
import User from "./UserTypes";

const data = {
    dude: {
        editing_key: "pbkdf2_sha256$216000$0OktNVkh2K3r$NtybgVd9X9KNok6th4k4YrnZoF+PBdffIyooietvcXs=",
        id: "81ffbfde-f8d6-4a45-8711-fc2ffec26d50",
        name: "KEkwas"
    },
    message: "Hi KEkwas"
}

type dudeType = {
    editing_key: string,
    id: string,
    name: string
}

type ResType = {
    dude: dudeType
    message: string
}

class ResultsModel implements User {
    //todo persist this
    name: string = '';
    id: string = '';
    status?: status = status.pending;
    errors?: any = '';
    key: string = '';

    constructor(id: string, name: string) {
        makeObservable(this, {
            name: observable,
            id: observable,
            key: observable,
            status: observable,
            errors: observable,
            authUser: action,
            loadFromAsync: action,
        })
        this.id = id;
        this.name = name;
    }

    async authUser(name: string) {
        this.name = ''
        this.status = status.pending;
        try {
            const res = await axios.post('http://134.249.181.40:7777/api/dude', {
                dude: {
                    name
                }
            });
            // const tests: ResultTypes[] = res.data.quizzes.map(({ id, creation_date, questions_count, quiz_name }: ResponseType) => new TestModel(id, quiz_name, creation_date, questions_count, []));
            console.log(res.data)
            runInAction(() => {
                this.status = status.success
                this.name = res.data.dude.name;
                this.id = res.data.dude.id;
                this.key = res.data.dude.editing_key;
                const user: User = {
                    name: this.name,
                    id: this.id,
                    key: this.key,
                }
                _storeData('UserModel', { ...user });
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.status = status.error;
                this.errors = error;
            })
        }
    }
    async loadFromAsync() {
        const data = await _retrieveData('UserModel');
        runInAction(() => {
            this.name = data.name;
            this.id = data.id;
            this.key = data.key;

        })
    }
}

export default UserModel;