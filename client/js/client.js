import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

 
import './assets/main.css'

import Index from "./components/IndexPage";
import Builder from "./components/BuilderPage";
import Paste from "./components/PastePage";
import Layout from "./components/Layout";
import Settings from "./components/Extra";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
    
      <Route path="paste(/:article)" name="paste" component={Paste}></Route>
      <Route path="builder(/:article)" name="builder" component={Builder}></Route>
    </Route>
  </Router>,
app);
