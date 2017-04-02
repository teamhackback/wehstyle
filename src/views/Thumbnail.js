import React, { Component } from 'react';
import {modelStore} from '../stores/ModelStore';
import { createStyleSheet } from 'jss-theme-reactor';

import {
  Card,
  CardMedia,
} from 'material-ui/Card';

const classes = {
    card: {
      maxWidth: 200,
    },
    cardImage: {
      maxWidth: 200,
    },
};

class Thumbnail extends Component {
  //static propTypes = {
    //articleId: React.PropTypes.string,
  //}
  render(){
    return (
      <Card style={classes.card} style={this.props.style}>
            <CardMedia>
              <img style={classes.cardImage} src={modelStore.imageThumbnail(modelStore.items[this.props.articleId])} alt="TBD" />
              </CardMedia>
      </Card>
    );
  }
};
export default Thumbnail;
