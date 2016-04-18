'use strict'

import React from 'react'
// import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Settings from './Extra'

export default class Layout extends React.Component {
  render () {
    const {location} = this.props
    const containerStyle = {
      marginTop: '60px'
    }
    // let heading = null
    return (
      <div> 
      <Header/> 
      <Nav location={location}/>       
      <div className='container' style={containerStyle}>
      <div className='row'>
      <div className='col-lg-12'>    
      {this.props.children}
      </div>           
      </div> 
      <Footer/>       
      </div>
      </div>    
    )
  }
}
