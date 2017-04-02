import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTool, { configureDevtool } from 'mobx-react-devtools';

import Thumbnails from './views/Thumbnails';
import Categories from './views/Categories';
import { modelStore } from './stores/ModelStore';
import Header from "./views/Header";
import Home from "./views/Home";

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
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        {Object.values(modelStore.categories).map(cat =>
          <Route key={cat.id} path={"/category/" + cat.name} component={Thumbnails} />
        )}
      </div>
    </MuiThemeProvider>
  </Router>
);
