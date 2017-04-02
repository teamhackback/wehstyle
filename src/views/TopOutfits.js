import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {
  Card,
  CardMedia,
} from 'material-ui/Card';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import {modelStore} from '../stores/ModelStore';

const styleSheet = createStyleSheet('TopOutfits', () => {
  return {
    root: {
      flexGrow: 1,
    },
    card: {
      height: 200,
      maxHeight: 200,
    },
    cardImage: {
      height: 200,
      maxHeight: 200,
    },
  };
});

class TopOutfits extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Layout item xs={12}>
        <Layout container className={classes.demo} justify="center" gutter={24}>
          <Layout key={0} item lg={3}>
            <Card className={classes.card}>
              <CardMedia>
                <img  className={classes.cardImage} src="./img/items/female/tops_women/sportsshirt1.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={1} item lg={3}>
            <Card className={classes.card}>
              <CardMedia >
                <img className={classes.cardImage} src="./img/items/female/tops_women/top1.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={2} item lg={3}>
            <Card className={classes.card}>
              <CardMedia>
                <img  className={classes.cardImage} src="./img/items/female/tops_women/top2.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default TopOutfits;
