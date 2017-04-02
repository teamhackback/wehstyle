import React, {Component} from 'react';

import "./Header.scss";

import User from "./Header/User";
import Navigation from "./Header/Navigation";

class Header extends Component {
    categoriesNames = [ "Kids", "Business", "Men", "Women", "Teenagers", "Sports" ];

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
    getCategoryElement(text) {
        return(
            <a key={text} href="#" className="Categories-link">{text}</a>
        );
    }

    categories() {
        return (
            <div className="Header-categories-row">
                <div className="Header-content">

                  { this.categoriesNames.map(value =>
                    this.getCategoryElement(value)
                  )}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Header">{this.user()}{this.navigation()}{this.categories()}</div>
        );
    }
}
export default Header
