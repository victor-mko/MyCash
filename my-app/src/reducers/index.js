import { combineReducers } from "redux";

import invoiceList from "./invoices";
import findInvoice from './findInvoice';

export default combineReducers({
    invoiceList,
    findInvoice
});