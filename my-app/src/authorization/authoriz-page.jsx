import React, { Component } from "react";
import "./auth-page.css";
import FacebookLogin from 'react-facebook-login';
import {
    Redirect
} from 'react-router-dom';
import { connect } from "react-redux";

class AuthPage extends Component {
    constructor() {
        super();
        this.state = {
            auth: false
        }
    }
        responseFacebook = (response) => {
            if (response.status !== "not_authorized") {
                this.setState((prevState) => ({
                    auth: !prevState.auth
                }));
            };
            console.log(response);
            console.log(response.status);
            console.log(this.state.auth);
        }
    
    render () {
        return ( 
            <div className="login-page">
                {
                    (this.state.auth) ? <Redirect to="/app" /> : 
                        <div className="container">
                            <div className="LogoBox">
                                <a href="">
                                    <span>My</span>Cash
                            </a>
                            </div>
                            <div className="buttom-box">
                                <p className="login-text">Please login with facebook to enter in MyCash App</p>
                                <FacebookLogin
                                    appId="143280559734605"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    cssClass="my-facebook-button-class"
                                />
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        invoiceArray: state
    }),
    dispatch => ({
        
    })
)(AuthPage);
