import React, {Component} from 'react';

import HumanModel from './views/HumanModel';

import {modelStore} from './stores/ModelStore';

import DevTool, { configureDevtool } from 'mobx-react-devtools';

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

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from "./Header";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <Header></Header>
        <DevTool />
        <HumanModel model={modelStore}></HumanModel>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default App;
