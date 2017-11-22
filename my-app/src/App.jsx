import React, { Component } from 'react';
import './scss/app.css';
import './scss/fonts.css';
import AuthPage from './authorization/authoriz-page';
import NavBar from './nav-Bar/navBar';
import Content from './Content/content';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthPage /> 
        {/*<NavBar />
        <Content />*/}
      </div>
    );
  }
}

export default connect (
  state => ({
    invoiceArray: state
  }),
  dispatch => ({})
)(App);
  