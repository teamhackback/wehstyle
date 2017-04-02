import React, { Component } from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {modelStore} from '../stores/ModelStore';
import { createStyleSheet } from 'jss-theme-reactor';

import {
  Card,
  CardMedia,
} from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';

const styleSheet = createStyleSheet('Thumbnail', () => {
  return {
    card: {
      maxWidth: 160,
      height: 160,
      minHeight: 140,
      marginBottom: 24,
    },
    cardImage: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 140,
      height: 140,
    },
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
          <div className="bigAvatar">
        <Avatar
          alt="Remy Sharp"
          src={modelStore.imageThumbnail(modelStore.items[this.props.articleId])}
          className={classes.bigAvatar}
        />
      </div>
              </CardMedia>
      </Card>
    );
  }
};
export default Thumbnail;
