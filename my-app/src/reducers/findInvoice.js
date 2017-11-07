let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getDate();

let invoiceArray = [];




export default function findInvoice(state = invoiceArray, action) {
    if (action.type === "FIND_INVOICE") {
        return
    }
    return state;
}