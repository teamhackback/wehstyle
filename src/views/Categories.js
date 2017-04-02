import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';

import Customizer from "./Customizer";
import {modelStore} from '../stores/ModelStore';
import {mapValues} from 'lodash';
import {transititonTo} from 'react-router';
import {Link} from 'react-router-dom';

import {observer} from 'mobx-react';

import CategoriesList from './CategoriesList';
import './Customizer.scss';
import HumanModel from './HumanModel';
import Recommender from './Recommender';
import SearchView from './SearchView';

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
  componentWillMount(){
    modelStore.setGender(this.props.location.pathname.split("/")[1]);
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.container}>
        <Layout container align='flex-start' justify='center' gutter={0}>
            <Layout item lg={4}>
                <div className="Title-outfit">Your outfit</div>
                <HumanModel model={modelStore}></HumanModel>
            </Layout>
            <Layout item lg={8}>
            <SearchView />
            <Recommender />
              <div className="Title">Select category</div>
              <CategoriesList />
            </Layout>
        </Layout>
      
      </div>
    );
  }
}

export default Categories;
