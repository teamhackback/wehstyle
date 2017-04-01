import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class HumanModel extends Component {
  render() {
    return (
      <div>
      {this.props.model.layers.map((layer) =>
        <img key={layer.name} src={layer.src} alt="Foo" />
      )}
      </div>
    );
  }
}

export default HumanModel
