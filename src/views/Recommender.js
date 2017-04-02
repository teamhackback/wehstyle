import React, {Component} from 'react';
import {modelStore} from '../stores/ModelStore';
import Thumbnail from './Thumbnail';
import Layout from 'material-ui/Layout';

import {observer} from 'mobx-react';

@observer
export default class Recommmender extends Component {
  render() {
    if (modelStore.layers.length === 1)
      return (<div></div>);
    const preds = modelStore.recommendedItems;
    if (preds.length < 1)
      return (<div></div>);
    return (
      <div>
          <div className="Title">Recommendations</div>

        <Layout container align='flex-start' justify='center' gutter={0}>
      { preds.map(e =>

        <Layout key={e.id} item onClick={() => modelStore.addLayerById(e.name)}>
          <Thumbnail articleId={e.name} />
        </Layout>
      )}
      </Layout>
      </div>
    );
  }
}
