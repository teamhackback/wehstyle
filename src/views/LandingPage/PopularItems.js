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
import { modelStore } from '../../stores/ModelStore';
import './PopularItems.scss';

const styleSheet = createStyleSheet('PopularItems', () => {
  return {
    container: {
      float: "right",
      width: 500,
    },
    card: {
      width: 200,
      height: 200,
      minHeight:200,
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
      maxWidth: 200
    }
  };
});

const presets = [
  {
    'gender': 'male',
    'articles': ['860709', '852431']
  },
  {
    'gender': 'female',
    'articles': ['875725']
  },
  {
    'gender': 'female',
    'articles': ['901195']
  },
  {
    'gender': 'male',
    'articles': ['834333', '828622']
  }
]

class PopularItems extends Component {
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
        <div className="Title">Top picks</div>
        <Layout container className={classes.demo} justify="flex-start" gutter={24}>
          <Layout key={0} item xs={4}>
            <Card className={classes.card} onClick={() => this.handleClick(0)}>
              <CardMedia>
                <img  className={classes.cardImage} src="./img/landing/preset0.jpg" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={1} item xs={4}>
            <Card className={classes.card} onClick={() => this.handleClick(1)}>
              <CardMedia >
                <img className={classes.cardImage} src="./img/landing/preset4.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={2} item xs={4}>
            <Card className={classes.card} onClick={() => this.handleClick(2)}>
              <CardMedia>
                <img className={classes.cardImage} src="./img/landing/preset3.png" alt="TBD" />
              </CardMedia>
            </Card>
          </Layout>
          <Layout key={3} item xs={4}>
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

export default PopularItems;
