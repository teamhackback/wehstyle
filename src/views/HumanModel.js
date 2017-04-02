import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { palette } from 'neuquant-js';
import {observer} from 'mobx-react';
import Dropzone from 'react-dropzone';
import Button from 'material-ui/Button';
import ModelThumbnail from './ModelThumbnail';
import {modelStore} from '../stores/ModelStore';

import domtoimage from 'dom-to-image';
import saveAs from 'save-as'

const styles = {
  female: {
    imgDiv: {
      left: 0,
      top: 0,
      position: "absolute",
      width: 263,
      height: 700,
    },
    parentDiv: {
      position: "relative",
      paddingBottom: 700,
      width: 263,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  },
  male: {
    imgDiv: {
      left: 0,
      top: 0,
      position: "absolute",
      width: 363,
      height: 700,
    },
    parentDiv: {
      position: "relative",
      paddingBottom: 700,
      width: 363
    }
  }
}

const rgbToHex = (r, g, b) => {
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  return `#${hex}`
}

const extractPalette = (img) => {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height

  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
  const colors = palette(data, {netsize: 16})

  const result = []
  for (let i = 0, l = colors.length; i < l;) {
    result.push(rgbToHex(colors[i++], colors[i++], colors[i++]))
  }
  return result
}

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
           obj = e.target;
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
    } else {
      this.setState({"hoveredLayer": undefined});
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

  onMouseOut = () => {
      this.setState({"hoveredLayer": undefined});
  };

  onImageUpload = (e) => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    let reader = new FileReader();
    reader.onload = (event) => {
      let img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const colors = palette(data, {netsize: 256, samplefac: 5});

    const result = []
    for (let i = 0, l = colors.length; i < l;) {
      result.push(rgbToHex(colors[i++], colors[i++], colors[i++]))
    }

    console.log(result);
  };

  imageUploadClick = (e) => {
    var fileUploadDom = findDOMNode(this.refs.imgUpload);
    fileUploadDom.click();
  };

  downloadClick = () => {
    domtoimage.toBlob(this.modelNode).then((blob) => {
      saveAs(blob, 'my-node.jpg');
    });
  };

  shareClick = () => {
    domtoimage.toBlob(this.modelNode, {quality: 0.95}).then((blob) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://wehstyle.hackback.tech/api/upload', true);
      var form = new FormData();
      form.append('title', 'WehStyle model');
      form.append('description', 'See it in large');
      form.append('image', blob, "image.jpg");
      xhr.onload = function(e) {
        if (this.status === 200) {
          const e = JSON.parse(this.responseText);
          const text = encodeURI("I just created this new Wehstyle model:");
          const url = encodeURI(e.html);
          const hashtags= encodeURI(["WehStyle", "Wehkamp", "HexTBD2017"].join(","));
          const twitter = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
          window.open(twitter,'_blank');
        }
      };
      xhr.send(form);
    });
  }

  render() {
    return (
      <div onMouseOut={this.onMouseOut}>
        <div className="ButtonWrapper">
          <Button type="button" onClick={this.imageUploadClick}>Upload</Button>
          <Button type="button" onClick={this.downloadClick}>Download</Button>
          <Button type="button" onClick={this.shareClick}>Share</Button>
          <input ref="imgUpload" type="file" style={{"display": "none"}} onChange={this.onImageUpload} />
        </div>
        <div style={{"width": 363, marginLeft: "11vw"}}>
        <div onMouseMove={this.onMouseMove} onClick={this.onClick} style={styles[modelStore.gender].parentDiv}
          ref={(node) => this.modelNode = node}
        >
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
            disableClick={true}
            style={{border: "none"}}
          >
          {this.props.model.layers.map((layer) =>
            <img key={layer.id} src={this.props.model.imagePath(layer)} style={styles[modelStore.gender].imgDiv} alt="Foo" />
          )}
          </Dropzone>
        </div>
        </div>

        { this.state.hoveredLayer && this.state.hoveredLayer.category !== "bodies" ?
            <ModelThumbnail model={this.state.hoveredLayer} />
            : <div className="Customizer-current-category">Selecteer een kledingstuk</div>
        }
      </div>
    );
  }
}

HumanModel.propTypes = {
  model: React.PropTypes.object
}

export default HumanModel
