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
    // giving style an obejct
    const containerStyle = {
      marginTop: '60px'
    }
    // header rendering DOM components
    return (
      <div> 
        {/* loading header componant */}
      <Header/> 
        {/*loading navigation bar */}
      <Nav location={location}/>       
      <div className='container' style={containerStyle}>
      <div className='row'>
      <div className='col-lg-12'>   
        {/* rendering children components */} 
      {this.props.children}
      </div>           
      </div> 
      {/* loading footer component */}
      <Footer/>       
      </div>
      </div>    
    )
  }
}
