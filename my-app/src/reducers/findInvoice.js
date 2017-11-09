import ActionTypes from '../actions/types';

let initialState = "";

export default function findInvoice(state = initialState, action) {
    if (action.type === ActionTypes.FIND_INVOICES) {
        return action.payload;
    }
    return state;
}