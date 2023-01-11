import gsap from 'gsap';
import React, { useEffect } from 'react'
import { CSSRulePlugin, Power2 } from 'gsap/all';

export const LeftAnimation = () => {
  
    let tl = gsap.timeline();
    const circle = CSSRulePlugin.getRule(".leftRound1");
    const circle1 = CSSRulePlugin.getRule(".leftRound");

    useEffect(() => {
        tl.to(circle, { transform: "scale(2)", backgroundColor: "rgba(0,0,0,0.2)", ease: Power2.easeInOut, repeat: -1, duration: 1, delay: 1 })
        tl.to(circle, { transform: "scale(1)", ease: Power2.easeInOut, repeat: -1, duration: 1, delay: 1 })
        gsap.to(circle1, { right: '5%', opacity: '100%', ease: Power2.easeIn, duration: 1, })

    }, [])

    return (
        <div className='page-intro-line d-flex align-items-center mt-3'>
            <span className='leftRound'></span>
            <span className='leftRound leftRound1'></span>
        </div>
    )
}
