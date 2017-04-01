import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {
  Card,
  CardMedia
} from 'material-ui/Card';
import Layout from 'material-ui/Layout';

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

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Layout container className={classes.root}>
        <Layout item xs={12}>
          <Layout
            container
            className={classes.demo}
            justify="center"
            gutter={24}
          >
            {Array.from({ length: 3 }, (v, k) => k).map((index) => (
              <Layout key={index} item>
                <Card className={classes.card}>
                  <CardMedia>
                    <img className={classes.cardImage} src="img/articles/pants1.jpeg" alt="Stripped White Pants" />
                  </CardMedia>
                </Card>
              </Layout>
            ))}
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default ArticleThumbnails;
