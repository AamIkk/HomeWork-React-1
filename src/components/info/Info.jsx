import React from 'react'
import './Info.css'
import COMPANY from '../../assets/COMPANY.png'
import CONTACT from '../../assets/CONTACT.png'
import LINKS from '../../assets/LINKS.png'
import SOCIAL from '../../assets/SOCIAL.png'

const Info = () => {
  return (
    <div className='info-block'>
        <div className="info1">
            <img src={COMPANY} alt="" />
        </div>
        <div className="info2">
        <img src={CONTACT} alt="" />
        </div>
        <div className="info3">
        <img src={LINKS} alt="" />
        </div>
        <div className="info4">
        <img src={SOCIAL} alt="" />
        </div>
    </div>
  )
}

export default Info