let initialState = "";

export default function findInvoice(state = initialState, action) {
    if (action.type === "FIND_INVOICE") {
        return action.payload;
    }
    return state;
}