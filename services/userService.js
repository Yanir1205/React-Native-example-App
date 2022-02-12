import StorageService from './storageService.js';

export default {
    getUser,
    login,
    logout,
    signup,
    getEmptyMove
}

var gUsers = [];
const USER_KEY = 'user-react';
const USERS_KEY = 'users-react';

function getUser(){
    var currUser = StorageService.getFromStorage(STORAGE_KEY)
    gUser = currUser;
    return Promise.resolve(currUser);
}

function login({ userName, password }) {
    gUsers = StorageService.getFromStorage(USERS_KEY);
    if (!gUsers) gUsers = [];
    const userStorage = gUsers.find((user) => 
    user.userName === userName && user.password === password)
    if (userStorage) {
        gUser = userStorage;
        StorageService.saveToStorage(USER_KEY, gUser);
        return Promise.resolve(gUser);
    }
    return Promise.resolve()
}

function logout() {
    gUser = ''
    StorageService.saveToStorage(USER_KEY, gUser);
    return Promise.resolve()
}

function signup({ userName, password }) {
    gUsers = StorageService.getFromStorage(USERS_KEY);
    if (!gUsers) gUsers = [];

    const newUser = {
        userName,
        password,
        coins: 100,
        moves: []
    }
    gUser = newUser;
    StorageService.store(USER_KEY, gUser);
    gUsers.push(newUser)
    StorageService.store(USERS_KEY, gUsers);
    return Promise.resolve(newUser);
}

function getEmptyMove() {
    return {
        fromUser: '',
        toId: '',
        to: '',
        at: 0,
        createTime: '',
        amount: 0
    }
}


