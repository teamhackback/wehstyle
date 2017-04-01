import React, {Component} from 'react';

import "./Navigation.scss";
class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    logo() {
        return (
            <div className="Header-navigation-logo">
            <a href="https://www.wehkamp.nl/">
               <img className="Header-navigation-logo-img" src="//assets.wehkamp.com/i/wehkamp/wehkamp_grijs?w=360&amp;$png$" alt="eerst wehkamp.nl" />
            </a>
            </div>
        );
    }

    links() {
        return (
            <div className="Header-navigation-link-wrapper">
                <a href="https://www.wehkamp.nl/" class="btn-root btn-Shop active">Shop</a>
                <a href="https://www.wehkamp.nl/premium" class="btn-root btn-Premium ">Premium</a>
                <a href="https://www.wehkamp.nl/inspiratie" class="btn-root btn-Inspiration ">Magazine</a>
                <a href="https://www.wehkamp.nl/merken/" class="btn-root btn-Brands ">Merken</a>
            </div>
        );
    }

    search() {
        return (
            <form className="Header-navigation-search">
                <input type="search" maxlength="100" className="Header-navigation-searchbox" placeholder="Zoeken" name="Ntt" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value={this.state.value} onChange={this.handleChange} />
                <button className="icon icon-search"><span>Zoek</span></button>
            </form>
        );
    }

    render() {
        return (<div className="Header-navigation-wrapper">{this.logo()}{this.links()}{this.search()}</div>);
    }
}
export default Navigation;