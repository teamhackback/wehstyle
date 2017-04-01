import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Layout from 'material-ui/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTool, { configureDevtool } from 'mobx-react-devtools';

import HumanModel from './views/HumanModel';
import Thumbnails from './views/Thumbnails';
import Categories from './views/Categories';
import {categories, modelStore} from './stores/ModelStore';

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


export default (
  <Router>
    <MuiThemeProvider>
      <div className="App">
        <DevTool />
            <div style={{display:"block", "float": "left"}}>
              <HumanModel model={modelStore}></HumanModel>
            </div>
            <div style={{marginLeft: 300}}>
              <Route exact path="/" component={Categories} />
              {Object.values(categories).map(cat =>
                <Route key={cat.id} path={"/category/" + cat.name} component={Thumbnails} />
              )}
          </div>
      </div>
    </MuiThemeProvider>
  </Router>
);
