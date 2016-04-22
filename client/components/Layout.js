'use strict'
 
// all imported classes  
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Settings from './Extra'

// layout component and rendering method
export default class Layout extends React.Component {
  render () {
    const {location} = this.props
    const containerStyle = {
      marginTop: '60px'
    }
    // header rendering DOM components
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
