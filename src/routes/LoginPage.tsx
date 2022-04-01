import {Component} from 'react';
import "../style/login_page.scss";

import Button from '@mui/material/Button';

import { ReactComponent as MobileSvg } from "../assets/illustrations/mobile_web.svg";
import { ReactComponent as GoogleLogo } from "../assets/icons/google_logo.svg";


class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="side splash">
                    <MobileSvg />
                    <h1>Welcome to our website</h1>
                </div>

                <div className="side">
                    <div className="form">
                        <h1 className="title">HELLO! WELCOME BACK.</h1>
                        <p className="desc">Log in with your data that you entered during your registratoin.</p>
                        <div className="text-input">
                            <label>Email address</label>
                            <input type="email" />
                        </div>
                        <div className="text-input">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        
                        <Button variant="contained">START NOW!</Button>
                        <div className="or" />
                        <div className="google">
                            <GoogleLogo />
                            Sign with Google
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;