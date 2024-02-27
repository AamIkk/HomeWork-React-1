import React, { Component } from 'react'
import Nav from '../nav/Nav'
import './Header.css'
import HEADERIMG from '../../assets/HEADER.png'

export default class Header extends Component {
  render() {
    return (
      <div className="container">
      <div className='block1'>
        <img src={HEADERIMG} alt="" />
        <Nav/>
      </div>
      </div>
    )
  }
}
