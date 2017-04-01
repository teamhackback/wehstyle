import React, {Component} from 'react';

class ModelThumbnail extends Component {
  render() {
    return (
      <div>
        Category: {this.props.model.category}
      </div>
    );
  }
}
export default ModelThumbnail;
