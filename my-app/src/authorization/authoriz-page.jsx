import React, { Component } from "react";
import "./auth-page.css";
import FacebookLogin from 'react-facebook-login';
import {
    Redirect
} from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions/authActions';

class AuthPage extends Component {

    onClickFacebookHandler = () => {
        this.props.requestLogin();
    }

    responseFacebook = response => {
        if (response.status !== "not_authorized") {
            this.props.receiveLogin(response);
        } else {
            this.props.errorLogin(response.status)
        }

    }
    
    render () {
        return ( 
            <div className="login-page">
                {
                    (this.props.auth.isLoggedin) ? <Redirect to="/app" /> : 
                        <div className="container">
                            <div className="LogoBox">
                                <a href="">
                                    <span>My</span>Cash
                            </a>
                            </div>
                            <div className="buttom-box">
                                <p className="login-text">Please login with facebook to enter in MyCash App</p>
                                <FacebookLogin
                                    onClick={this.onClickFacebookHandler}
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

const mapStoreToProps = (store) => {
    return {
        auth: store.authReducer
    }
}


export default connect(mapStoreToProps, actions)(AuthPage);
