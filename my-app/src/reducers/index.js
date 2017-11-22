import { combineReducers } from "redux";

import invoiceList from "./invoices";
import findInvoice from './findInvoice';
import getUserData from './userDate';

export default combineReducers({
    invoiceList,
    findInvoice,
    getUserData
});