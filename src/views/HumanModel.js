import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Dropzone from 'react-dropzone';
import FlatButton from 'material-ui/FlatButton';
import ModelThumbnail from './ModelThumbnail';

const imgStyle = {
  left: 0,
  top: 0,
  position: "absolute",
  width: 260,
  height: 679,
}

const GLOBAL_IMAGE_PATH = "/img/items";

@observer
class HumanModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse : [0, 0],
      hoveredLayer: undefined
    };
  }
  _findLayer = (e) => {
   var m_posx = 0, m_posy = 0, e_posx = 0, e_posy = 0,
           obj = this;
    //get mouse position on document crossbrowser
    if (!e){e = window.event;}
    if (e.pageX || e.pageY){
        m_posx = e.pageX;
        m_posy = e.pageY;
    } else if (e.clientX || e.clientY){
        m_posx = e.clientX + document.body.scrollLeft
                 + document.documentElement.scrollLeft;
        m_posy = e.clientY + document.body.scrollTop
                 + document.documentElement.scrollTop;
    }
    //get parent element position in document
    if (obj.offsetParent){
        do {
            obj = obj.offsetParent;
            e_posx += obj.offsetLeft;
            e_posy += obj.offsetTop;
        } while (obj.offsetParent);
    }
    const mouse = [m_posx - e_posx, m_posy - e_posy];
    this.setState({"mouse": mouse});
    const model = this.props.model.findById(mouse[0], mouse[1]);
    if (model !== false) {
      this.setState({"hoveredLayer": model});
    }
    return model;
  };
  onMouseMove = (e) => {
    this._findLayer(e);
  };
  onClick = (e) => {
    console.log("click");
    const model = this._findLayer(e);
    if (model !== false && model.category !== "bodies") {
      this.props.model.removeLayer(model);
    }
  };
  onDrop = (files) => {
    console.log(files);

  }
  onUploadClick = (files) => {
    console.log(files);
  };
  render() {
    return (
      <div>
        <FlatButton type="button" onClick={this.imageUploadClick}> Upload
        </FlatButton>
        <div onMouseMove={this.onMouseMove} onClick={this.onClick} style={{position: "relative", paddingBottom: 679}}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
            disableClick={true}
            style={{border: "none"}}
          >
          {this.props.model.layers.map((layer) =>
            <img key={layer.id} src={GLOBAL_IMAGE_PATH + "/" + layer.src} style={imgStyle} alt="Foo" />
          )}
          </Dropzone>
        </div>

        { this.state.hoveredLayer && this.state.hoveredLayer.category !== "bodies" ?
            <ModelThumbnail model={this.state.hoveredLayer} />
            : null
        }
      </div>
    );
  }
}

HumanModel.propTypes = {
  model: React.PropTypes.object
}

export default HumanModel
