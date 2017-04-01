import React, {Component} from 'react';

import "./Header.scss";

import User from "./Header/User";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    user() {
        return (
            <div className="Header-userRow">
                <div className="Header-content">
                    <User></User>
                </div>
            </div>
        );
    }


    render() {
        return (
            <div className="Header">{this.user()}</div>
        );
    }
}
export default Header