import ActionTypes from '../actions/types';

let userData = {};

export default function getUserData(state = userData, action) {
    if (action.type === ActionTypes.USER_DATA) {
        return state = action.payload
    }
    return state;
}