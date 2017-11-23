import ActionTypes from '../actions/types';

const userData = {};

export default function authReducer(state = userData, action) {
    if (action.type === ActionTypes.REQUEST_LOGIN) {
        return {
            ...state,
            isLoading: action.payload.isLoading,
            isLoggedin: action.payload.isLoggedin
        }
    } else if (action.type === ActionTypes.RECEIVE_LOGIN) {
        return {
            ...state,
            isLoading: action.payload.isLoading,
            isLoggedin: action.payload.isLoggedin,
            user: action.payload.user
        }
    } else if (action.type === ActionTypes.ERROR_LOGIN) {
        return {
            isLoading: action.payload.isLoading,
            isLoggedin: action.payload.isLoggedin,
            error: action.payload.user
        }
    } else {
        return state
    }
}