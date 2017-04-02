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
      width: "135px",
      height: 260,
      minHeight:260,
      marginBottom: 24,
      border: "1px dashed #e1e1e1",
      boxShadow: "none",
      position: "relative",
      cursor: "pointer"
    },
    cardMedia: {
      height: "90%",
      width: "90%",
      top: "50%",
      left: "50%"
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
            <CardMedia className={classes.cardMedia} style={this.props.style}>
              <img className={classes.cardImage} src={modelStore.imageThumbnail(modelStore.items[this.props.articleId])} alt="TBD" />
              </CardMedia>
        <div className={classes.cardImageTitle}>Test</div>
      </Card>
    );
  }
};
export default Thumbnail;
