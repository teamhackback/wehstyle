import React, {Component} from 'react';

import './PopularItems.scss';

class PopularItems extends Component {
    popularItems = [ "example" ];

    getPopularItem(text) {
        return(
            <div className="PopularItem">
                <img src={"./img/popular/" + text + ".png"}></img>
            </div>
        );
    }

    render() {
        var elements = [];
        this.popularItems.forEach( value => {
            elements.push(this.getPopularItem(value));
        });
        return <div className="PopularItems"><div className="Title">Popular outfits</div>{elements}</div>;
    }
}
export default PopularItems;