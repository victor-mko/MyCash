import React, { Component } from "react";
import "./auth-page.css";
import FacebookLogin from 'react-facebook-login';
import {
    Redirect
} from 'react-router-dom'

class AuthPage extends Component {
    constructor() {
        super();
        this.state = {
            auth: true
        }
    }
    responseFacebook = (response) => {
        if (response.status !== "unknown") {
            this.setState(() => {
                auth: false
            });
        };
        console.log(response);
    }
    render () {
        return ( 
            <div className="login-page">
                {this.state.auth && <Redirect to="/app" />}
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
            </div>
        );
    }
}

export default AuthPage;