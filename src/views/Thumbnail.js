import React, { Component } from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {modelStore} from '../stores/ModelStore';
import { createStyleSheet } from 'jss-theme-reactor';

import {
  Card,
  CardMedia,
} from 'material-ui/Card';

const styleSheet = createStyleSheet('Thumbnail', () => {
  return {
    card: {
      maxWidth: 190,
      height: 260,
      minHeight:260,
      marginBottom: 24,
    },
    cardImage: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  };
});

class Thumbnail extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Card className={classes.card} style={this.props.style}>
            <CardMedia>
              <img className={classes.cardImage} src={modelStore.imageThumbnail(modelStore.items[this.props.articleId])} alt="TBD" />
              </CardMedia>
      </Card>
    );
  }
};
export default Thumbnail;
