import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {
  Card,
  CardMedia,
} from 'material-ui/Card';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';

import TopOutfits from "./TopOutfits.js";
import PreDefinedOutfits from "./PreDefinedOutfits.js";

const styleSheet = createStyleSheet('Home', (theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 50,
    height: 720,
  },
  paper: {
    paddingTop: 100,
    paddingBottom: 120,
    marginBottom: 60,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  carousel: {
    marginBottom: 60,
  }
}));


class Home extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.container}>
        <Layout container align='flex-start' justify='center' gutter={0}>
          <Layout item lg={6}>
            <Layout container align='flex-start' justify='space-around' gutter={0}>
              <Layout item lg={9}>
                <TopOutfits />
              </Layout>
              <Layout item lg={9}>
                <PreDefinedOutfits />
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
