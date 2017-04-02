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
import Category from "./Category";

class CategoriesList extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  render() {
    return (
      <Layout item lg={6} style={{marginLeft: "16vw"}} container align='flex-start' justify='center' gutter={4}>
        {Object.values(modelStore.categories).map(cat =>
          <Layout item key={cat.id}>
            <Category name={cat.name} gender={modelStore.gender} />
          </Layout>
        )}
      </Layout>
    );
  }
}

export default CategoriesList;
