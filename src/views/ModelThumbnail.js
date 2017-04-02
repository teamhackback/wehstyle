import React, {Component} from 'react';

class ModelThumbnail extends Component {
  render() {
    return (
      <div className="Customizer-current-category">
        Categorie: {this.props.model.category }
      </div>
    );
  }
}
export default ModelThumbnail;
