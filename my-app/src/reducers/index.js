import { combineReducers } from "redux";

import invoiceList from "./invoices";
import findInvoice from './findInvoice';
import authReducer from './authReducer';

export default combineReducers({
    invoiceList,
    findInvoice,
    authReducer
});