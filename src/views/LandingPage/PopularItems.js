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
import Avatar from 'material-ui/Avatar';


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
    },
    bigAvatar: {
      margin: 10,
      width: 180,
      height: 180,
    }
  };
});

const presets = [
  {
    id: 0,
    'gender': 'male',
    'articles': ['860709', '852431'],
    "img": "./img/landing/preset0_small.jpg"
  },
  {
    id: 1,
    'gender': 'female',
    'articles': ['875725'],
    "img": "./img/landing/preset4_small.jpg"
  },
  {
    id: 2,
    'gender': 'female',
    'articles': ['901195'],
    "img": "./img/landing/preset3_small.jpg"
  },
  {
    id: 3,
    'gender': 'male',
    'articles': ['834333', '828622'],
    "img": "./img/landing/preset2_small.jpg"
   },
  {
    id: 4,
    'gender': 'male',
    'articles': ['876651', '871665']
  },
  {
     id: 5,
    'gender': 'male',
    'articles': ['828678', '852431', '864563']
  }
]
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
          { presets.map(preset =>
          <Layout key={preset.id} item xs={6}>
            <Card className={classes.card} onClick={() => this.handleClick(preset.id)}>
              <CardMedia>

                <div className="bigAvatar">
        <Avatar
          alt="Item"
          src={preset.img}
          className={classes.bigAvatar} />
                </div>
              </CardMedia>
            </Card>
          </Layout>
          )}
        </Layout>
      </div>
    );
  }
}

export default PopularItems;
