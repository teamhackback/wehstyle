import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';

import Customizer from "./Customizer";
import {modelStore} from '../stores/ModelStore';
import {mapValues} from 'lodash';
import {transititonTo} from 'react-router';
import {Link} from 'react-router-dom';

const styleSheet = createStyleSheet('Categories', () => {
  return {
    paper: {
      height: 150,
      width: 150,
    },
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
        <Paper className={classes.paper}>
          <Text>{this.props.name}</Text>
        </Paper>
      </Link>
    );
  }
}

export default Category;
