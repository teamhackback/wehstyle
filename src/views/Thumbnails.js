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
import SearchView from './SearchView';


const styleSheet = createStyleSheet('Thumbnails', () => {
  return {
    card: {
      maxWidth: 190,
      height: 260,
      minHeight:260,
      marginBottom: 24,
    },
    cardImage: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  };
});

@observer
class Thumbnails extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }

  componentWillMount(){
    modelStore.setGender(this.props.location.pathname.split("/")[1]);
    const category = this.props.match.params.catid;
    this.setState({
      articles: modelStore.categories[category].products || []
    });
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.container}>
        <Layout container align='flex-start' justify='center' gutter={0}>
          <Layout item lg={4}>
            <div className="Title Title-outfit">Your outfit</div>
            <HumanModel model={modelStore}></HumanModel>
          </Layout>
          <Layout item lg={8}>
            <SearchView />
            <Recommender />
            <div className="Title">Select item</div>
            <Layout container align='flex-start' justify='center' gutter={16}>
              {this.state.articles.map(article =>
                <Layout key={article} item onClick={() => modelStore.addLayerById(article)}>
                  <Thumbnail articleId={article} />
                </Layout>
              )}
            </Layout>
            <Link to={"/" + modelStore.gender + "/categories"} className="noDecoration">
              <div className="Button Category-back">Category overview</div>
            </Link>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Thumbnails;
