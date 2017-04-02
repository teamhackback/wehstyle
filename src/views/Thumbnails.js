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

import {GLOBAL_IMAGE_PATH, modelStore} from '../stores/ModelStore';
import HumanModel from './HumanModel';
import {observer} from 'mobx-react';


const styleSheet = createStyleSheet('Thumbnails', () => {
  return {
    root: {
      flexGrow: 1,
    },
    card: {
      maxWidth: 200,
    },
    cardImage: {
      maxWidth: 200,
    },
  };
});

@observer
class Thumbnails extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  constructor(props) {
    super(props);
    const category = props.location.pathname.replace("/category/", "");
    this.state = {
      articles: modelStore.categories[category].products || []
    };
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.container}>
        <Layout container align='flex-start' justify='center' gutter={0}>
          <Layout item lg={6}>
            <div className="Title">Your outfit</div>
            <HumanModel model={modelStore}></HumanModel>
          </Layout>
          <Layout item lg={6}>
            <div className="Title">Select item</div>
            <Layout container align='flex-start' justify='center' gutter={12}>
              {this.state.articles.map(article =>
                <Layout key={article} item onClick={() => modelStore.addLayerById(article)}>
                  <Card className={classes.card}>
                    <CardMedia>
                      <img className={classes.cardImage} src={modelStore.imageThumbnail(modelStore.items[article])} alt="TBD" />
                    </CardMedia>
                  </Card>
                </Layout>
              )}
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Thumbnails;
