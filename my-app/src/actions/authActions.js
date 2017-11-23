import ActionTypes from "./types";

export const requestLogin = () => ({
    type: ActionTypes.REQUEST_LOGIN,
    payload: {
        isLoading: true,
        isLoggedin: false
    }
});

export const receiveLogin = user => ({
    type: ActionTypes.RECEIVE_LOGIN,
    payload: {
        isLoading: false,
        isLoggedin: true,
        user
    }
});

export const errorLogin = error => ({
    type: ActionTypes.ERROR_LOGIN,
    payload: {
        isLoading: false,
        isLoggedin: false,
        error
    }
});