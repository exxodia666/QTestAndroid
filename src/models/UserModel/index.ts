import { action, makeObservable, observable } from "mobx";
import User from "./UserTypes";

class UserModel implements User {
    constructor(id: string, name: string) {
        makeObservable(this, {
            name: observable,
            setName: action,
        })
        this.id = id;
        this.name = name;
    }
    name = '';
    id = '';

    setName = (newName: string): void => {
        this.name = newName
    }
}
export default UserModel;