import React, {Component} from 'react';

import Header from './Header';
import Categories from './LandingPage/Categories';
import PopularItems from './LandingPage/PopularItems';

import './LandingPage.scss';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <div className="Logo">
                    <img src="./img/logo.png" alt="Logo" />
                </div>
                <div className="LandingPage-wrapper">
                    <Categories></Categories>
                    <PopularItems></PopularItems>
                </div>
            </div>
        );
    }
}
export default LandingPage;