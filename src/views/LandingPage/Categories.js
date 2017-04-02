import React, {Component} from 'react';

import './Categories.scss';

class Categories extends Component {
    categories = [ "Men", "Women", "Kids", "Business", "Teenagers", "Sports" ];

    getCategoryElement(text) {
        return(
            <a href="/male/categories/" className="Category">
                <img src={"./img/landing/" + text + ".png"}></img>
                <span className="imageDescription">{text}</span>
            </a>
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