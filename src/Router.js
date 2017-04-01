import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainLayout from './views/MainLayout';
import Thumbnails from './views/Thumbnails';


const categories = ["dresses", "pants", "tops"]

export default (
  <Router>
    <Route path="/" component={MainLayout}>
      {Array.from(categories).map((category) => (
        <Route path={category} component={Thumbnails} />
      ))}
    </Route>
  </Router>
);
