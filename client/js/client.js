import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

 
import './assets/main.css'

import Builder from "./components/BuilderPage";
import Paste from "./components/PastePage";
import Layout from "./components/Layout";
import Settings from "./components/Extra";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Paste}></IndexRoute>
      <Route path="builder(/:article)" name="builder" component={Builder}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
