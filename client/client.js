'use strict'

// importing REACT and REACT-DOM -our rendering engine 
import React from 'react'
import ReactDOM from 'react-dom'
// importing react routes
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.html'
import './assets/css/main.styl'
// importin path components
import Index from './components/IndexPage'
import Builder from './components/BuilderPage'
import Paste from './components/PastePage'
import Layout from './components/Layout'

const app = document.getElementById('app')
// rendering routes and are pointing them to components; booting history. 
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      //loading index route 
      <IndexRoute component={Index}></IndexRoute>
      /*subroutes added:
      Header, Footer and Navigation bar always be always loaded  
      and child routes will be loaded depending on which state is on 
      and injecting apropriate child component to layout*/
      <Route path='paste' name='paste' component={Paste}></Route>
      <Route path='builder' name='builder' component={Builder}></Route>
    </Route>
  </Router>,
app)
