import gsap from 'gsap';
import React, { useEffect } from 'react'
import { CSSRulePlugin, Power2 } from 'gsap/all';

const AnimationLine = ({color}) => {

    let tl = gsap.timeline();
    const circle = CSSRulePlugin.getRule( color === "white" ? ".circle1-white" : ".circle1" );
    const circle1 = CSSRulePlugin.getRule(".circle");

    useEffect(() => {
        tl.to(circle, { transform: "scale(2)", backgroundColor: color === "white" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)", ease: Power2.easeInOut, repeat: -1, duration: 1, delay: 1 })
        tl.to(circle, { transform: "scale(1)", ease: Power2.easeInOut, repeat: -1, duration: 1, delay: 1 })
        gsap.to(circle1, { right: '5%',opacity: '100%', ease: Power2.easeIn, duration: 1,})

    }, [])

    return (
            <div className="d-flex align-items-center justify-content-center mt-3">
                <span className={color === "white" ? "page-intro-line color-white-border" : "page-intro-line"}></span>
                <span className={color === "white" ? "circle color-white" :  "circle"}></span>
                <span className={ color === "white" ? "circle circle1 circle1-white" : "circle circle1"}></span>
            </div>
    )
}

export default AnimationLine