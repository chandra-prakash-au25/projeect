import React, { useEffect } from 'react'
import AnimationLine from './AnimationLine'
import { CSSRulePlugin, Power2 } from 'gsap/all';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const CommonHead = ({ commonheaddata }) => {
    const navigate = useNavigate();
    console.log(commonheaddata?.data)
    const sectionborder = CSSRulePlugin.getRule(".left-anim");
    const headline = CSSRulePlugin.getRule(".loyalty-top:after");

    useEffect(() => {
        gsap.to(sectionborder, { marginLeft: '0%', opacity: '100%', ease: Power2.easeIn, duration: 1, })
        gsap.to(headline, { right: '110%', ease: Power2.easeIn, repeat: -1, duration: 1.5, repeatDelay: 1, delay: -1 })
    }, [])
    return (
        <div>
            <div className="loyalty-top">
                <div className="left-anim">
                    <div className='d-flex flex-column page-intro-head'>
                        <div className='d-flex flex-column'>
                            <span className='page-title'>{commonheaddata?.head} {commonheaddata?.haed}</span>
                        </div>
                        <span className="cursor-pointer" onClick={() => navigate(-1)} >Back</span>
                        <AnimationLine />
                    </div>
                    {
                        commonheaddata?.designsecond ?
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-column mt-3'>
                                    <span className='team-msg'>Meet the people</span>
                                    <span className='team-msg'>that make</span>
                                    <span className='team-msg'>performance</span>
                                    <span className='team-msg'>possible.</span>
                                </div>
                                <div className='d-flex flex-column justify-content-end pb-3'>
                                    <span className='team-msg2'>This is what happens when you put talent into an</span>
                                    <span className='team-msg2'> environment where it thrives</span>
                                </div>
                            </div>
                            :
                            <div className='page-msg'>{commonheaddata?.data}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CommonHead