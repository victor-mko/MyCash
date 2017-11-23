import React, { Component } from "react";
import "./header-style.css";
import "../../scss/fonts.css";
import AvatarDefault from "../../image/AvatarDefault.jpg";
import { connect } from "react-redux"; 




class Header extends Component { 
    render () {
        return (
            <div className="header">
                
                <div className="user-name">
                    <p id="userName" >{this.props.auth.user.name}</p>
                </div>
                <div className="user-avatar">
                    <img id="userAvatar" src={this.props.auth.user.picture.data.url } alt ={"Viktor Mykhailenko"} />
                </div>
                <div className="settings">
                    <a href="">
                        <i className="icon-settings"></i>
                    </a> 
                </div>
                <div className="logout">
                    <a href="">
                        <i className="icon-logout"></i>
                    </a>
                </div>
            </div>
        );
    }
}


const mapStoreToProps = (store) => {
    return {
        auth: store.authReducer
    }
}
export default connect(mapStoreToProps, null)(Header);
