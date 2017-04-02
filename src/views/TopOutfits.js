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
      card: {
          width: "170px",
          height: 375,
          minHeight:260,
          marginBottom: 24,
          border: "1px dashed #e1e1e1",
          boxShadow: "none",
          position: "relative",
          cursor: "pointer"
      },
      cardMedia: {
          top: "50%",
          left: "50%"
      },
      cardImage: {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'absolute',
          transform: 'translate(-50%,-50%)'
      }
  };
});

const presets = [
  {
    'gender': 'male',
    'articles': ['dark_pants', 'blue_fancy_shirt']
  },
  {
    'gender': 'female',
    'articles': ['jeans1', 'sportsshirt1']
  },
  {
    'gender': 'female',
    'articles': ['romper3']
  },
  {
    'gender': 'male',
    'articles': ['blue_pants', 'grey_shirt']
  }
]

class TopOutfits extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
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
        <Layout container className={classes.demo} justify="space-around" gutter={16}>
          <Layout key={0} item lg={3}>
            <Card className={classes.card} onClick={() => this.handleClick(0)}>
              <CardMedia>
                <img  className={classes.cardImage} src="./img/landing/preset0.jpg" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={1} item lg={3}>
            <Card className={classes.card} onClick={() => this.handleClick(1)}>
              <CardMedia >
                <img className={classes.cardImage} src="./img/landing/preset1.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={2} item lg={3}>
            <Card className={classes.card} onClick={() => this.handleClick(2)}>
              <CardMedia>
                <img className={classes.cardImage} src="./img/landing/preset3.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={3} item lg={3}>
            <Card className={classes.card} onClick={() => this.handleClick(3)}>
              <CardMedia>
                <img className={classes.cardImage} src="./img/landing/preset2.jpg" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default TopOutfits;
