import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Layout from 'material-ui/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DevTool, { configureDevtool } from 'mobx-react-devtools';

import Customizer from "./views/Customizer";

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
        <Customizer></Customizer>
      </div>
    </MuiThemeProvider>
  </Router>
);
