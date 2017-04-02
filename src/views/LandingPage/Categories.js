import React, {Component} from 'react';

import './Categories.scss';

class Categories extends Component {
    categories = [ "Kids", "Business", "Men", "Women", "Teenagers", "Sports" ];

    getCategoryElement(text) {
        return(
            <div className="Category">
                <img src={"./img/landing/" + text + ".png"}></img>
                <span className="imageDescription">{text}</span>
            </div>
        );
    }

    render() {
        var elements = [];
        this.categories.forEach( value => {
            elements.push(this.getCategoryElement(value));
        });
        return <div className="Categories"><div className="Title">Browse by category</div>{elements}</div>;
    }
}
export default Categories;