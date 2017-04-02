import React, {Component} from 'react';
import {modelStore} from '../../stores/ModelStore';

import "./Navigation.scss";
class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
      modelStore.searchTerm = event.target.value;
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
                <a href="https://www.wehkamp.nl/" className="btn-root btn-Shop active">Shop</a>
                <a href="https://www.wehkamp.nl/premium" className="btn-root btn-Premium ">Premium</a>
                <a href="https://www.wehkamp.nl/inspiratie" className="btn-root btn-Inspiration ">Magazine</a>
                <a href="https://www.wehkamp.nl/merken/" className="btn-root btn-Brands ">Merken</a>
            </div>
        );
    }
    onClear = () => {
      modelStore.searchTerm = "";
    };

                //<button className="icon icon-cross"><span>Zoek</span></button>
    search() {
        return (
          <div className="Header-navigation-search" onSubmit={(e) => false }>
                <input type="search" maxLength="100" className="Header-navigation-searchbox" placeholder="Zoeken" spellCheck="false" onChange={this.handleChange} />
                <button className="icon icon-search" onClick={this.onClear}><span>Zoek</span></button>
            </div>
        );
    }

    render() {
        return (<div className="Header-navigation-wrapper">{this.logo()}{this.links()}{this.search()}</div>);
    }
}
export default Navigation;
