import React from 'react'
import './History.css'

const History = () => {
  return (
    <div className="container">

    <div className='king'>
        <h1>Our story</h1>
    <div className='history'>
          <div className="history-text">
            <h3 className="history-text-title">
            Founded in 2011 by John Mathew <br /> Smith, Konstruct has become the <br /> number one construction management <br /> firm
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br /> diam nonummy nibh euismod tincidunt ut laoreet dolore magna <br /> aliquam erat. Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br /> laoreet dolore magna aliquam erat.            </p>
        </div>
        <div className="history-cards">
            <div className="card card1">
                <h2>WE <br/> PLAN</h2>
            </div>
            <div className="card card2">
                <h2>WE MANAGE</h2>
            </div>
            <div className="card card3 ">
                <h2>WE <br/> BUILD</h2>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default History