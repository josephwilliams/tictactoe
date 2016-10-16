import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactRouter, {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import Splash from './components/splash';

const Routes = (
  <Router history={hashHistory} >
    <Route path="/" component={Splash} >
      <IndexRoute component={Splash} />
      <Route path="*" component={Splash} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  ReactDOM.render(Routes, root);
});
