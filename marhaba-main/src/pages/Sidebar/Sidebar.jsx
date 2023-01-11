import React, { useEffect, useState } from 'react'
import marhaba_icon from '../../assets/images/marhaba_icon.png'
import menu_button from '../../assets/images/menu_button.png'
import menu_close from '../../assets/images/menuClose.png'
import Mapmenudata from './Mapmenudata'
import { CSSRulePlugin } from 'gsap/all';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [show, setShow] = useState(false)

  const menuData = [
    {
      "id": 1,
      "menuText": "Business",
      "menuTextBold": "Growth Partnership",
      "link": "/business"
    },
    {
      "id": 2,
      "menuText": "Loyality and",
      "menuTextBold": "Engagement Growth",
      "link": "/loyalty"
    },
    {
      "id": 3,
      "menuText": "Digital",
      "menuTextBold": "Transformation",
      "link": "/digital"
    },
    {
      "id": 4,
      "menuText": "Our",
      "menuTextBold": "Team",
      "link": "/teams"
    }
  ]


  function handleMenu(e) {
    const sidebar = CSSRulePlugin.getRule(".sidebar-menu");
    const sidebardiv = CSSRulePlugin.getRule(".sidebar-menu div");
    let tl = gsap.timeline();
    if (!show){
      tl.to(sidebar, {left: "6%", duration: 1.5})
      tl.to(sidebardiv, {opacity: "100%", duration: 0.3})
    }
    else{
      tl.to(sidebardiv, {opacity: "0%", duration: 0.3})
      tl.to(sidebar, {left: "-60%", delay: 0, duration: 1.5})
    }
    setShow(!show)
    
  }

  let tl = gsap.timeline();
  const menuline = CSSRulePlugin.getRule(".sidebar:after");

  useEffect(()=> {
    tl.to(menuline, {bottom: "110%", repeat: -1, duration: 1.5, repeatDelay:1, delay:0})

  })

  return (
    <>
      <div className='sidebar-wrapper'>
        <div className='sidebar d-flex flex-column  justify-content-between' style={{ "background": show ? "#dfdbdb" : "#f7f6f6" }}>
          <div className='mb-5'>
            <Link to="/" className='mt-2 ' >
              <img src={marhaba_icon} alt="icon" className='marhaba-icon' />
            </Link>
          </div>
          <div className=''>
              <img onClick={e => handleMenu(e)} src={show ? menu_close : menu_button} alt="icon" className='menu-button cursor-pointer' />
          </div>
          <div className='sidebar-text d-flex mb-5'>
            <span className='text text-1'>Your</span>
            <span className='text text-2'>360˚ Growth Partner</span>
          </div>
        </div>
          <Mapmenudata menuData={menuData} show={show} setShow={handleMenu}/>

      </div>
    </>
  )
}

export default Sidebar