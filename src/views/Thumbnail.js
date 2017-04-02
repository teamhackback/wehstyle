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
      border: "1px dashed #e1e1e1",
      boxShadow: "none",
      position: "relative",
      cursor: "pointer"
    },
    cardMedia: {
    },
    cardImage: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'absolute',
      transform: 'translate(-50%,-50%)',
      maxWidth: "100%",
      maxHeight: "100%"
    },
    cardImageTitle: {
      paddingTop: "10px",
      paddingBottom: "10px",
      width: "100%",
      textAlign: "center",
      opacity: 0.8,
      backgroundColor: "rgba(112,112,112,.9)",
      top: "75%",
      color: "white",
      transform: "translateY(-50%)",
      position: "absolute",
      fontSize: "14px",
      lineHeight: "24px",
      height: "24px"
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
    const model = modelStore.items[this.props.articleId];

    return (
      <Card className={classes.card} style={this.props.style}>
            <CardMedia className={classes.cardMedia} style={this.props.style}>
          <div className="bigAvatar">
        <Avatar
          alt="Item"
          src={modelStore.imageThumbnail(model)}
          className={classes.bigAvatar}
        />
      </div>
              </CardMedia>
        <div className={classes.cardImageTitle}>{model.fulltext.slice(0, 25)}</div>
      </Card>
    );
  }
};
export default Thumbnail;
