import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';

import {modelStore} from '../stores/ModelStore';
import {mapValues} from 'lodash';
import {transititonTo} from 'react-router';
import {Link} from 'react-router-dom';

import {observer} from 'mobx-react';

import './Categories.scss';

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

@observer
class Categories extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Layout container className={classes.root}>
        {Object.values(modelStore.categories).map(cat =>
          <Layout item key={cat.id}>
            <Link to={"/category/" + cat.name}>
              <Paper className={classes.paper}>
                <Text>{cat.name}</Text>
              </Paper>
            </Link>
          </Layout>
        )}
      </Layout>
    );
  }
}

export default Categories;
