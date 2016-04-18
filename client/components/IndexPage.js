'use strict'

import React from 'react'

export default class Index extends React.Component {
  render () {
    console.log('index')
    return (
      <h4>
      Welcome to a web interface for capturing vidi metrics. 
      (<a href="https://github.com/vidi-insights">More about vidi-insights project </a>)<br/>    
      Allowing you to transmit JSON
      (<a href="https://en.wikipedia.org/wiki/JSON">what is JSON?</a>)
      object via UDP emitter to influx DB <br/>
      that will connect with Graphing instance and will graph your data from JSON object. 
      <p> </p>     
      <p>If you have ready JSON  go to the <a href="index.html#paste"> Paste Page </a> 
      and just paste it in the text field.<br/>
      If you would like to build JSON object from your data go to the 
      <a href="index.html#builder"> Builder Page. </a></p>
      </h4>     
    )
  }
}
