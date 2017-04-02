import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Thumbnails from './views/Thumbnails';
import Categories from './views/Categories';
import { modelStore } from './stores/ModelStore';
import Header from "./views/Header";
import LandingPage from "./views/LandingPage";

//import DevTool, { configureDevtool } from 'mobx-react-devtools';
// Any configurations are optional
//configureDevtool({
  //// Turn on logging changes button programmatically:
  //logEnabled: true,
  //// Turn off displaying conponents' updates button programmatically:
  //updatesEnabled: false,
  //// Log only changes of type `reaction`
  //// (only affects top-level messages in console, not inside groups)
  //logFilter: change => change.type === 'reaction',
//});


        //<DevTool />
export default (
  <Router>
    <MuiThemeProvider>
      <div className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        { ["male", "female"].map(gender =>
          <div key={gender}>
            <Route path={"/" + gender + "/categories"} component={Categories} />
            <Route path={"/" + gender + "/category/:catid"} component={Thumbnails} />
        </div>
        )}
      </div>
    </MuiThemeProvider>
  </Router>
);
