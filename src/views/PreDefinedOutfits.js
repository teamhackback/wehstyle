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

import {categories, items, GLOBAL_IMAGE_PATH, modelStore} from '../stores/ModelStore';

const styleSheet = createStyleSheet('PreDefinedOutfits', () => {
  return {
    card: {
      maxWidth: 150,
      height: 150,
      minHeight:150,
    },
    cardImage: {
      maxWidth:150,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  };
});

const presets = [
  {
    'gender': 'female',
    'articles': ['romper2']
  },
  {
    'gender': 'male',
    'articles': ['superdry_sport_pants', 'orange_sports_shirt']
  },
  {
    'gender': 'female',
    'articles': ['bra1', 'shorts1']
  },
  {
    'gender': 'male',
    'articles': ['formal_pants', 'blue_fancy_shirt', 'formal_colbert']
  }
]

class PreDefinedOutfits extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  constructor(props) {
    super(props);
  }

  handleClick = (id, e) => {
    modelStore.setGender(presets[id]['gender']);
    modelStore.initLayers(presets[id]);
    this.props.history.push('/' + presets[id]['gender'] + '/categories');
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.container}>
        <Layout container className={classes.demo} justify="space-around" gutter={0}>
          <Layout key={0} item sm={3}>
            <Card className={classes.card} onClick={() => this.handleClick(0)}>
              <CardMedia>
                <img  className={classes.cardImage} src="./img/landing/preset4.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={1} item sm={3}>
            <Card className={classes.card} onClick={() => this.handleClick(1)}>
              <CardMedia >
                <img className={classes.cardImage} src="./img/landing/preset5.jpg" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={2} item sm={3}>
            <Card className={classes.card} onClick={() => this.handleClick(2)}>
              <CardMedia>
                <img className={classes.cardImage} src="./img/landing/preset7.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={3} item sm={3}>
            <Card className={classes.card} onClick={() => this.handleClick(3)}>
              <CardMedia>
                <img className={classes.cardImage} src="./img/landing/preset6.jpg" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default PreDefinedOutfits;
