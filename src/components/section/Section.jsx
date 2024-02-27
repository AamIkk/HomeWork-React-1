import React from 'react'
import './Section.css'
import BGIMG from '../../assets/BG.png'

const Section = () => {
  return (
    <div className='king3'>
        <div className="section-img">
            <img src={BGIMG} alt="" />
        </div>
        <div className="section-text">
            <h1>Want to build <br /> something amazing?</h1>
            <button className='btn btn-outline-info'>GET IN TOUCH</button>
        </div>
    </div>
  )
}

export default Section