import React, { Component } from "react";
import "./auth-page.css";
import FacebookLogin from 'react-facebook-login';

class AuthPage extends Component {
    responseFacebook = (response) => {
        console.log(response);
    }
    render () {
        return ( 
            <div className="login-page">
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
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            size="metro"
                            cssClass="my-facebook-button-class"
                        />
                    </div>
                </div>
            </div>
        );
    }
}




export default AuthPage;


{/* <script>
    function testAPI() {
        FB.api('/me?fields=name,email,birthday,id,picture{url,is_silhouette}', function (response) {
            document.getElementById('userName').innerHTML = response.name;
            document.getElementById('userAvatar').setAttribute("src", response.picture.data.url);
            console.log(response);
        });
    }

        function checkLoginState() {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    }

        function statusChangeCallback(response) {
        console.log('statusChangeCallback');
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
        }
        window.fbAsyncInit = function() {
        FB.init({
            appId: '143280559734605',
            cookie: true,
            xfbml: true,
            version: 'v2.10'
        });

    FB.AppEvents.logPageView();

        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
    </fb:login - button > */}