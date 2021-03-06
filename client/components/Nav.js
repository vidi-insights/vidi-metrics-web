'use strict'

import React from 'react'
import {Link } from 'react-router'


/* Menu, on click opening navigation for 3 pages Home, Paste, Builder */
export default class Nav extends React.Component {
  constructor () {
    super()
  }    
  render () {
    return (
      <div className='nav-main-wrapper'>
        <input type='checkbox' name='nav-menu-handle' id='nav-menu-handle' className='nav-menu-handle' />
        <label htmlFor='nav-menu-handle'></label>

        <nav role='navigation' className='nav-main'>
          <ul className='list-unstyled list-inline'>
              <li className='nav-item'>
                <Link to={'/'} >Home</Link>
              </li>              
              <li className='nav-item'>
                <Link to={'/paste'}>Paste</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/builder' }>Builder</Link>
              </li>      
            </ul>
          </nav>
      </div>
    )
  }
}
