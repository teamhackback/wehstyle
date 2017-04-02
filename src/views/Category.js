import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';

import Customizer from "./Customizer";
import {modelStore} from '../stores/ModelStore';
import {mapValues} from 'lodash';
import {transititonTo} from 'react-router';

import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('Categories', () => {
  return {
    paper: {
      height: 150,
      width: 150,
    },
    bigAvatar: {
          margin: 10,
          width: 140,
          height: 140,
          position: 'relative'
      },
    avatarText: {
      color: "white",
      position: "absolute",
      top: "50%",
      width: "160px",
      fontWeight: "bold",
      transform: "translateY(-50%)",
      textAlign: "center"
    }
  };
});

class Category extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Link to={"/" + this.props.gender + "/category/" + this.props.name}>
        <div className="bigAvatar">
        <Avatar
          alt="Item"
          className={classes.bigAvatar}
          src="/img/items/circle.png" />
        <div className={classes.avatarText}>{this.props.name}
        </div>
        </div>
      </Link>
    );
  }
}

export default Category;
