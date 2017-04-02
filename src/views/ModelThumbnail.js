import React, {Component} from 'react';
import {modelStore} from '../stores/ModelStore';

class ModelThumbnail extends Component {
  render() {
    const category = modelStore.getCategory(this.props.model.category);
    return (
      <div className="Customizer-current-category" style={{
      "textAlign": "center"
      }}>
        <i>{this.props.model.fulltext} </i><br/>
        <b>{category.fulltext } </b>
      </div>
    );
  }
}
export default ModelThumbnail;
