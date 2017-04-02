import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

import {GLOBAL_IMAGE_PATH, modelStore} from '../stores/ModelStore';
import HumanModel from './HumanModel';
import {observer} from 'mobx-react';

import Thumbnail from './Thumbnail';
import Recommender from './Recommender';


const styleSheet = createStyleSheet('Thumbnails', () => {
  return {
    root: {
      flexGrow: 1,
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
    const category = props.match.params.catid;
    this.state = {
      articles: modelStore.categories[category].products || []
    };
  }

  componentWillMount(){
    modelStore.setGender(this.props.location.pathname.split("/")[1]);
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
            <Recommender />
            <div className="Title">Select item</div>
            <Layout container align='flex-start' justify='center' gutter={16}>
              {this.state.articles.map(article =>
                <Layout key={article} item onClick={() => modelStore.addLayerById(article)}>
                  <Thumbnail articleId={article} />
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
