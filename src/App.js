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

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTool />
        <HumanModel model={modelStore}></HumanModel>
      </div>
    )
  }
}

export default App;
