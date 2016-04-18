'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import './index.html'
import './assets/css/main.styl'

import Index from './components/IndexPage'
import Builder from './components/BuilderPage'
import Paste from './components/PastePage'
import Layout from './components/Layout'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path='paste' name='paste' component={Paste}></Route>
      <Route path='builder' name='builder' component={Builder}></Route>
    </Route>
  </Router>,
app)
