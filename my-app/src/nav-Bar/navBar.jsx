import React, { Component } from 'react';
import './navBar.css';
import PageNav from './PageNav/pageNav';
import Balance from './Balance/balance';



class NavBar extends Component {
    render () {
        return (
            <div className="navBar">
                <div className="LogoBox">
                    <a href="">
                        <span>My</span>Cash
                    </a>
                </div>
                <PageNav />
                <Balance />
            </div>
        );
    }
}




export default NavBar;