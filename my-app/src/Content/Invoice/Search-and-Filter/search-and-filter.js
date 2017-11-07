import React, { Component } from "react";
import "./search-and-filter-style.css";
import "../../../scss/fonts.css";
import { connect } from 'react-redux';

class SearchAndFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }

    searchInvoice = (event) => {
        this.props.onFindInvoice(this.state.searchValue)
    }

    render () {
        return (
            <div className="search-form">
                <div className="search">
                    <input
                        className="input-field" 
                        type="text" 
                        value={this.state.searchValue} 
                        onChange={this.handleInputChange} 
                        placeholder="Search..."
                    />
                    <button type="submit" className="search-button" onClick={this.searchInvoice}></button>
                </div>
                <div className="filter">
                    <a href="">
                        <i className="icon-calendar"></i>
                    </a>
                    <select name="select">
                        <option value="value1" selected>All period</option>
                        <option value="value2">Last month</option>
                        <option value="value3">Last week</option>
                        <option value="value3">Today</option>
                    </select>
                </div> 
            </div>
        );
    }
}

export default connect(
    state => ({
        invoiceArray: state.invoiceList
    }),
    dispatch => ({
        onFindInvoice: (invoice) => {
            dispatch({
                type: "FIND_INVOICE",
                payload: invoice
            });
        }
    })
)(SearchAndFilter);