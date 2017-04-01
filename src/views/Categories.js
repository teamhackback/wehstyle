import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';

const categories = ['Tops', 'Shoes', 'Skirts']

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
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Layout container className={classes.root}>
        {Array.from(categories.entries()).map((item) => (
          <Layout key={item[0]} item>
            <Paper className={classes.paper}>
              <Text>{item[1]}</Text>
            </Paper>
          </Layout>
        ))}
      </Layout>
    );
  }
}

export default Categories;
