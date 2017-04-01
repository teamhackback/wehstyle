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

const styleSheet = createStyleSheet('ArticleThumbnails', () => {
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

class ArticleThumbnails extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  constructor(props) {
    super(props);
    const category = props.location.pathname.replace("/category/", "");
    this.state = {
      articles: categories[category].products || []
    };
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div>
        <Link to="/">
          <Button> Back </Button>
        </Link>
        <Layout container className={classes.root}>
          <Layout item xs={12}>
            <Layout
              container
              className={classes.demo}
              justify="center"
              gutter={24}
            >
              {this.state.articles.map(article =>
                <Layout key={article} item onClick={() => modelStore.addLayerById(article)}>
                  <Card className={classes.card}>
                    <CardMedia>
                      <img className={classes.cardImage} src={GLOBAL_IMAGE_PATH + "/" + items[article].thumbnail} alt="TBD" />
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

export default ArticleThumbnails;
