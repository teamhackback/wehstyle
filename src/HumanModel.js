import React, {Component} from 'react';

class HumanModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layers: [
        {
          name: "base_body",
          src: "./img/bodys/dummybody.png",
        }
      ]
    };
  }
  render() {
    return (
      <div>
      {this.state.layers.map((layer) =>
        <img key={layer.name} src={layer.src} alt="Foo" />
      )}
      </div>
    );
  }
}
export default HumanModel
