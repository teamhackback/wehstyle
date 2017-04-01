import React, {Component} from 'react';

import "./User.scss";
class User extends Component {
    shippingPrice() {
        return (
            <a href="https://www.wehkamp.nl/specials/bezorgen/">Gratis verzending vanaf € 20.-<sup>*</sup></a>
        );
    }
    shippingTime() {
        return (
            <a href="https://www.wehkamp.nl/specials/bezorgen/">Voor 23:00 besteld, morgen in huis<sup>*</sup></a>
        );
    }
    returns() {
        return (
            <a href="https://www.wehkamp.nl/specials/retourneren/">Gratis retourneren</a>
        );
    }
    promo() {
        return (
            <div className="User-promo">
                {this.shippingPrice()}
                {this.shippingTime()}
                {this.returns()}
            </div>
        );
    }

    account() {
        return (
            <div className="User-account">
                <a className="User-account-login" href="https://login.wehkamp.nl/?redirectUrl=https%3a%2f%2fwww.wehkamp.nl">Inloggen</a>
                <a className="User-account-myaccount" href="https://selfservice.wehkamp.nl/"><span className="icon icon-account" aria-hidden="true"></span>Mijn wehkamp.nl</a>
                <a className="User-account-service" href="https://www.wehkamp.nl/Klantenservice/Default.aspx">Klantenservice</a>
            </div>
        );
    }

    render() {
        return (<div>{this.promo()}{this.account()}</div>);
    }
}
export default User;