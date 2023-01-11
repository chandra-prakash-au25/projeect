import React, { useEffect, useRef } from 'react'
import { CSSRulePlugin } from 'gsap/all';
import { gsap } from 'gsap';
import {Link} from "react-router-dom"
import WhatsApp_icon from '../../assets/images/WhatsApp_Icon.png'
import Linkedin_icon from '../../assets/images/Linkedin_Icon.png'

const Mapmenudata = (props) => {

    const text = useRef()
    gsap.registerPlugin(CSSRulePlugin)

    let tl = gsap.timeline();
    const firstline = CSSRulePlugin.getRule(".a0:after");
    const secondline = CSSRulePlugin.getRule(".a1:after");
    const thirdline = CSSRulePlugin.getRule(".a2:after");
    const fouthline = CSSRulePlugin.getRule(".a3:after");


    useEffect(() => {
        animation();
    }, [])

    const animation = () => {
        tl.to(firstline, { width: "10%", repeat: -1, delay: 0, duration: 0, repeatDelay: 4, })
        tl.to(firstline, { left: "95%", repeat: -1, duration: 1.5, repeatDelay: 4, })
        tl.to(secondline, { width: "10%", repeat: -1, duration: 0, repeatDelay: 4, })
        tl.to(secondline, { left: "95%", repeat: -1, duration: 1.5, repeatDelay: 4, })
        tl.to(thirdline, { width: "10%", repeat: -1, duration: 0, repeatDelay: 4, })
        tl.to(thirdline, { left: "95%", repeat: -1, duration: 1.5, repeatDelay: 4, })
        tl.to(fouthline, { width: "10%", repeat: -1, duration: 0, repeatDelay: 4, })
        tl.to(fouthline, { left: "95%", repeat: -1, duration: 1.5, repeatDelay: 4, })
    }
    return <>
        <div className='sidebar-menu d-flex flex-column p-5 justify-content-between'>
            <div className='d-flex flex-column justify-content-between'>
                {
                    props.menuData.map((e, index) => {
                        return (
                            <div className='d-flex flex-column mb-4 ' key={e.id} >
                                <Link to={e.link} className='menu-link' onClick={()=>{props.setShow()}}>
                                    <div ref={text} className={`d-flex flex-column borderbotanim a${index}`}>
                                        <span className='menu-text'>{e.menuText}</span>
                                        <span className='menu-text-bold '>{e.menuTextBold}</span>
                                    </div>
                                </Link>
                                <span className='border-line'></span>
                            </div>
                        )
                    })
                }
            </div>


            <div className='d-flex justify-content-between align-items-center mt-5'>
                <Link to="/letstalk" className='menu-link' onClick={()=>{props.setShow(!props.show)}}>
                    <div className='d-flex flex-column mx-3'>
                        <span className='m-cont-text'>Contact Us</span>
                        <span className='m-cont-msg'>Let's Talk about your project</span>
                    </div>
                </Link>
                <div>
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=971502510626" className='m-social-link'>
                        <img src={WhatsApp_icon} alt="Whatsapp" className='m-social-img' />
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/company/marhaba-gts" className='m-social-link'>
                        <img src={Linkedin_icon} alt="LinkedIn" className='m-social-img' />
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Mapmenudata