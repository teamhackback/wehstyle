import React, {Component} from 'react';
import Header from './Header';
import HumanModel from './HumanModel';
import Thumbnails from './Thumbnails';
import Categories from './Categories';
import Recommender from './Recommender';
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

const shareUrl = "https://whatever.com/";
const imageUrl = "https://linktoimage/";
const title = "Wehkamp designer";
const description = "Zojuist een prachtig outfit gecreerd, direct te bestellen bij Wehkamp!";

class Customizer extends Component {
    constructor(props) {
        super(props);
    }
    humanModel() {
        return (
            <div className="Customizer-left">
                <div className="Title">Your outfit</div>
                <div className="Customizer-left-model">
                    <HumanModel model={modelStore}></HumanModel>
                </div>
            </div>);
    }
    shareButtons() {
        return (
            <FacebookShareButton url={shareUrl} picture={imageUrl} description={description} title={title} />
        );
    }
    items() {
        return (
            <div className="Customizer-right">
                <Recommender />
                <div className="Title">Select category</div>
                <Categories />
                {this.shareButtons()}
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
