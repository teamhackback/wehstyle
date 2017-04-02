import React, {Component} from 'react';
import Header from './Header';
import HumanModel from './HumanModel';
import Thumbnails from './Thumbnails';
import Categories from './Categories';
import {modelStore} from '../stores/ModelStore';
import {ShareButtons} from 'react-share';

import "./Customizer.scss";

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton
} = ShareButtons;

class Customizer extends Component {
    constructor(props) {
        super(props);
    }
    humanModel() {
        return (
            <div className="Customizer-left">
                <div className="Title">Your outfit</div>
                <HumanModel model={modelStore}></HumanModel>
            </div>);
    }
    shareButtons() {
        return (
            <FacebookShareButton />
        );
    }
    items() {
        return (
            <div className="Customizer-right">
                <div className="Title">Select category</div>
                <Categories></Categories>
            </div>
        );
    }
    render() {
        return (
            <div>
            <Header></Header>
            <div className="Customizer-wrapper">
                {this.humanModel()}
                {this.items()}
            </div>
            </div>
        );
    }
}
export default Customizer;