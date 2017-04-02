import React, {Component} from 'react';
import Layout from 'material-ui/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTool, { configureDevtool } from 'mobx-react-devtools';

import HumanModel from './HumanModel';
import Header from './Header';
import Categories from './Categories';
import {modelStore} from '../stores/ModelStore';

// Any configurations are optional
configureDevtool({
  // Turn on logging changes button programmatically:
  logEnabled: true,
  // Turn off displaying conponents' updates button programmatically:
  updatesEnabled: false,
  // Log only changes of type `reaction`
  // (only affects top-level messages in console, not inside groups)
  logFilter: change => change.type === 'reaction',
});

export default class MainLayout extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      userLoggedIn: false
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <Header></Header>
          <DevTool />
          <Layout container gutter={24}>
              <Layout item xs={12} lg={4}>
                <HumanModel model={modelStore}></HumanModel>
              </Layout>
              <Layout item xs={12} lg={8}>
                {this.props.children || <Categories></Categories>}
              </Layout>
          </Layout>
        </div>
      </MuiThemeProvider>
    );
  }

}
