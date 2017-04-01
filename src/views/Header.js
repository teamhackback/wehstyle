import React, {Component} from 'react';

import "./Header.scss";

import User from "./Header/User";
import Navigation from "./Header/Navigation";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    user() {
        return (
            <div className="Header-user-row">
                <div className="Header-content">
                    <User></User>
                </div>
            </div>
        );
    }

    navigation() {
        return (
            <div className="Header-navigation-row">
                <div className="Header-content">
                    <Navigation></Navigation>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Header">{this.user()}{this.navigation()}</div>
        );
    }
}
export default Header