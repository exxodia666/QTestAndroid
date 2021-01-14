import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import status from "../../enum/status";
import { _retrieveData, _storeData } from "../AsyncStorage";
import User, { result } from "./UserTypes";

// const data = {
//     dude: {
//         editing_key: "pbkdf2_sha256$216000$0OktNVkh2K3r$NtybgVd9X9KNok6th4k4YrnZoF+PBdffIyooietvcXs=",
//         id: "81ffbfde-f8d6-4a45-8711-fc2ffec26d50",
//         name: "KEkwas"
//     },
//     message: "Hi KEkwas"
// }

// type dudeType = {
//     editing_key: string,
//     id: string,
//     name: string
// }

// type ResType = {
//     dude: dudeType
//     message: string
// }

class UserModel implements User {
    //todo persist this
    name: string = '';
    id: string = '';
    status?: status = status.pending;
    errors?: any = '';
    key: string = '';
    results = [];

    constructor(id: string, name: string) {
        makeObservable(this, {
            name: observable,
            results: observable,
            id: observable,
            key: observable,
            status: observable,
            errors: observable,
            authUser: action,
            loadFromAsync: action,
            fetchResults: action,
            clearResults: action
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
            runInAction(() => {
                this.status = status.error;
                this.errors = error;
            })
        }
    }

    async logoutUser(key: string) {
        // this.name = ''
        // this.status = status.pending;
        // try {
        //     const res = await axios.post('http://134.249.181.40:7777/api/dude', {
        //         dude: {
        //             name
        //         }
        //     });
        //     // const tests: ResultTypes[] = res.data.quizzes.map(({ id, creation_date, questions_count, quiz_name }: ResponseType) => new TestModel(id, quiz_name, creation_date, questions_count, []));
        //     console.log(res.data)
        //     runInAction(() => {
        //         this.status = status.success
        //         this.name = res.data.dude.name;
        //         this.id = res.data.dude.id;
        //         this.key = res.data.dude.editing_key;
        //         const user: User = {
        //             name: this.name,
        //             id: this.id,
        //             key: this.key,
        //         }
        //         _storeData('UserModel', { ...user });
        //     })
        // } catch (error) {
        //     console.log(error);
        //     runInAction(() => {
        //         this.status = status.error;
        //         this.errors = error;
        //     })
        // }
    }

    async loadFromAsync() {
        const data = await _retrieveData('UserModel');
        runInAction(() => {
            this.name = data.name;
            this.id = data.id;
            this.key = data.key;

        })
    }
    //     {
    //     "dude": { "id": "681cf256-ce15-4b27-aa5b-50f193b6fd56", "name": "KEKEWAS" },
    //     "pass_date": "2021-01-14T14:03:28.619727+02:00", 
    //"quiz": { 
    //     "creation_date": "2021-01-14T00:21:06.350446+02:00",
    //     "id": "e132ff78-59d7-45b8-8d7e-923e2cf166a4",
    //     "is_public": true, "questions_count": 2,
    //     "quiz_name": "Test request"
    // }, "rating": 0.25
    // }
    async fetchResults() {
        try {
            const res = await axios.get(`http://134.249.181.40:7777/api/dude/${this.id}`);
            runInAction(() => {
                // console.log(res.data.dude.results)
                this.results = res.data.dude.results.map((e: any) => {
                    const obj: result = {
                        quiz_name: e.quiz.quiz_name,
                        rating: e.rating,
                        pass_date: e.pass_date
                    }
                    return obj;
                });
                console.log(this.results)
            })
        } catch (e) {
            console.log('e')
            console.log(e)
        }
    }

    clearResults() {
        this.results = [];
    }
}

export default UserModel;