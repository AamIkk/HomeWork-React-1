import React, { Component } from 'react'
import './Footer.css'
import CARD1 from '../../assets/CARD1.png'
import CARD2 from '../../assets/CARD2.png'
import CARD3 from '../../assets/CARD3.png'

export default class Footer extends Component {
  render() {
    return (
      <div className="container">

        <div className='king2'>
            <div className="footer-block1">
              <h1>OUR CAPABILITIES</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br /> nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
              <button className='btn btn-outline-info'>ALL SERVICES</button> 
            </div>
            <div className="footer-block2">
              <img src={CARD1} alt="" />
              <img src={CARD2} alt="" />
              <img src={CARD3} alt="" />
            </div>
        </div>
      </div>
    )
  }
}
