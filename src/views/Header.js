import React, {Component} from 'react';

import "./Header.scss";

import User from "./Header/User";
import Navigation from "./Header/Navigation";
import {Link} from 'react-router-dom';

import {modelStore} from '../stores/ModelStore';
import {observer} from 'mobx-react';


@observer
class Header extends Component {
      constructor(props) {
        super(props);
        this.state = {categoriesNames: [
            { link: "#", name: "Kids"},
            { link: "#", name: "Business"},
            { gender: "male", link: "/male/categories", name:  "Men"},
            { gender: "female", link: "/female/categories", name:"Women"},
            { link: "#", name:"Teenagers"},
            { link: "#", name:  "Sports"}
          ]};
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
        const defaultClass = "Header-Categories-link";
        return(
          <Link to={text.link} className={text.gender === modelStore.gender ? defaultClass + " active" : defaultClass} key={text.name} href="#" >{text.name} </Link>
        );
    }

    categories() {
        return (
            <div className="Header-categories-row">
                <div className="Header-content">

                  { this.state.categoriesNames.map(value =>
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
