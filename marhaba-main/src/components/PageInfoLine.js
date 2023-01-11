import gsap from 'gsap';
import React, { useEffect } from 'react'
import { CSSRulePlugin, Power2 } from 'gsap/all';
export const PageInfoLine = () => {
  
    let tl = gsap.timeline();
    const circle = CSSRulePlugin.getRule(".round1");
    const circle1 = CSSRulePlugin.getRule(".round");

    useEffect(() => {
        tl.to(circle, { transform: "scale(2)", backgroundColor: "rgba(0,0,0,0.2)", ease: Power2.easeInOut, repeat: -1, duration: 1, delay: 1 })
        tl.to(circle, { transform: "scale(1)", ease: Power2.easeInOut, repeat: -1, duration: 1, delay: 1 })
        gsap.to(circle1, { right: '5%', opacity: '100%', ease: Power2.easeIn, duration: 1, })

    }, [])

    return (
        <div className="d-flex align-items-center page-line-wrapper mt-3">
            <span className="page-info-line"></span>
            <span className="round"></span>
            <span className="round round1"></span>
        </div>
    )

}
