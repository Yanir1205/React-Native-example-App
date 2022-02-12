import { observable, action } from 'mobx';
import UserService from '../services/userService.js';

class UserStore {
    @observable currUser = null;

    @action
    loadUser() {
        return UserService.getUser()
            .then((user) => {
                this.setUser(user)
            })
    }

    @action
    setUser(user) {
        this.currUser = user ? JSON.parse(JSON.stringify(user)) : user;
    }

    @action
    signupUser(credentials) {
        return UserService.signup(credentials)
            .then((user) => {
                this.setUser(user)
            })
    }

    @action
    logout() {
        return UserService.logout()
            .then(() => {
                this.setUser()
            })
    }

    @action
    login(credentials) {
        return UserService.login(credentials)
            .then((user) => {
                this.setUser(user)
            })
    }

    get getCurrUser() {
        return this.currUser;
    }
}

const store = new UserStore
export default store;

