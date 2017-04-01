import React, {Component} from 'react';
import {observer} from 'mobx-react';

const imgStyle = {
  left: 0,
  top: 0,
  position: "absolute",
}

@observer
class HumanModel extends Component {
  render() {
    return (
      <div>
      {this.props.model.layers.map((layer) =>
        <img key={layer.name} src={layer.src} style={imgStyle} alt="Foo" />
      )}
      </div>
    );
  }
}

export default HumanModel
