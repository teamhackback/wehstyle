import React, {Component} from 'react';
import {modelStore} from '../stores/ModelStore';
import Thumbnail from './Thumbnail';
import Layout from 'material-ui/Layout';

import {observer} from 'mobx-react';

@observer
export default class Recommmender extends Component {
  render() {
    const preds = modelStore.searchedItems;
    console.log("search", modelStore.searchTerm);
      if ( modelStore.searchTerm.length < 1)
          return (<div></div>);
      if (preds.length < 1)
      {
          return (
            <div>
              <div className="Title">Search results</div>
              <div> No results found </div>
            </div>
          );
      }
    return (
      <div>
          <div className="Title">Search results</div>

        <Layout container align='flex-start' justify='center' gutter={0}>
      { preds.map(e =>

        <Layout key={e.id} style={{"paddingLeft": 10}} item onClick={() => modelStore.addLayerById(e.name)}>
          <Thumbnail articleId={e.name} />
        </Layout>
      )}
      </Layout>
      </div>
    );
  }
}
