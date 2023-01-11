import React, { useEffect } from 'react'
import { CSSRulePlugin, Power2 } from 'gsap/all';
import { gsap } from 'gsap';
export const Footer = () => {
  let tl = gsap.timeline();
  const sectionborder = CSSRulePlugin.getRule(".footer:after");

  useEffect(() => {
      tl.to(sectionborder, { right: '100%', ease: Power2.easeIn, repeat: -1, duration: 1.5, repeatDelay: 1, delay: -1 })
     
  }, [])
  return (
    <div className='footer d-flex align-items-center justify-content-center'>Copyright@ S C softsolution 2022</div>
  )
}
