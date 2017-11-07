let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getDate();

let invoiceArray = [{
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 1,
        expensesType: "transit",
        what: "to home",
        settings: "aaaa"
    },
    {
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 50,
        expensesType: "car",
        what: "Petrol",
        settings: "aaaa"
    },
    {
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 1,
        expensesType: "transit",
        what: "to work",
        settings: "aaaa"
    },
    {
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 10,
        expensesType: "food",
        what: "Beer and chips",
        settings: "aaaa"
    },
    {
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 100,
        expensesType: "other",
        what: "Present",
        settings: "aaaa"
    },
    {
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 50,
        expensesType: "other",
        what: "credit",
        settings: "aaaa"
    },
    {
        id: Date.now().toString(),
        type: "expenses",
        date: day + "/" + month + "/" + year,
        cost: 2,
        expensesType: "food",
        what: "Bread",
        settings: "aaaa"
    },

];




export default function invoiceList(state = invoiceArray, action) {
    if (action.type === "ADD_INVOICES") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}