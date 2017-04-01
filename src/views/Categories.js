import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';

import {categories} from '../stores/ModelStore';
import {mapValues} from 'lodash';

const styleSheet = createStyleSheet('Categories', () => {
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 150,
      width: 150,
    },
    cardImage: {
      maxWidth: 200,
    },
  };
});

class Categories extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  render() {
    console.log("cats", categories);
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Layout container className={classes.root}>
        {Object.values(categories).map(cat =>
          <Layout item key={cat.id}>
            <Paper className={classes.paper}>
              <Text>{cat.name}</Text>
            </Paper>
          </Layout>
        )}
      </Layout>
    );
  }
}

export default Categories;
