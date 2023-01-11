import React, { useEffect, useState } from 'react'
import zahid from "../assets/images/zahid.jpeg";
import fabian from "../assets/images/fabian.jpg";
import atish from "../assets/images/atish.jpeg";
import linkedin from '../assets/images/Linkedin_Icon.png'
import { CSSRulePlugin, Power2 } from 'gsap/all';
import { gsap } from 'gsap';
import CommonHead from '../components/CommonHead';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeam } from '../redux/ourTeam';
import { fetchTeam1 } from '../redux/ourTeam-tog';
import chandra from '../assets/chandra.jpg'
import bal from '../assets/gov.jpg'
import sau from '../assets/sau.jpg'


export const OurTeam = () => {
    const counter = useSelector((state) => state.ourTeam)
    const counter2 = useSelector((state) => state.ourTeamtog)
    const dispatch = useDispatch()
    const headData = counter?.data?.data?.[0]?.attributes;
    const teamData = counter2?.data?.data;
    let tl = gsap.timeline();
    const sectionborder = CSSRulePlugin.getRule(".team-members:after");
    const teamMemberCard = CSSRulePlugin.getRule(".t-member-card");
    const chandra1="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    const sau1="https://www.linkedin.com/in/bal-govind-maurya-9b8231218/"
    const bal1="https://www.linkedin.com/in/bal-govind-maurya-9b8231218/"
    useEffect(() => {
        tl.to(sectionborder, { right: '100%', ease: Power2.easeIn, repeat: -1, duration: 1.5, repeatDelay: 1, delay: -1 })
        gsap.to(teamMemberCard, { marginTop: '0%', opacity: "100%", ease: Power2.easeIn, duration: 1.5, delay: -1 })
        dispatch(fetchTeam())
        dispatch(fetchTeam1())

    }, [])

    const [view, setView] = useState(false)
    const [bioData, setBioData] = useState({
        Name: "",
        bio: "",
        socialLink: "",
    })
    const viewBio = async (e) => {
        await setView(true)
        await setBioData({
            Name: e?.attributes?.name,
            bio: e?.attributes?.data,
            
        })
        await document.querySelector(".footer").scrollIntoView({ behavior: "smooth" })
    }

    const mapTeamData = teamData?.map((e, i) => {
        console.log(e,'==========') 
       return (
            <div className='t-member-card d-flex flex-column' key={e?.id}>
                {i=='0' &&                <img src={chandra} alt="profileImg" className='t-mem-img' />}
                {i=='1' &&                <img src={bal} alt="profileImg" className='t-mem-img'  style={{height:"260px"}}/>}
                {i=='2' &&                <img src={sau} alt="profileImg" className='t-mem-img'style={{height:"260px"}} />}
            
                <span className='t-mem-name'>{e?.attributes?.name}</span>
                <span className='t-mem-position'>{e?.attributes?.post}</span>
                <button className='t-mem-bio' onClick={() => { viewBio(e); }}>
                    <span>View Bio</span>
                </button>
            </div>
        )
    })
    return (
        <div className='our-team'>
            <CommonHead commonheaddata={headData} />
            <div onClick={() => console.log("cool")} className='team-members d-flex justify-content-between'>
                {mapTeamData}
            </div>
            {
                view ?
                    <div className='view-bio'>
                        <div className="bio-head d-flex flex-column mb-5">
                            <div className='d-flex align-items-center mb-2'>
                                <span className='bio-name mx-2'>{bioData?.Name}</span>
                               
                                
                            </div>
                            <span className='page-intro-line'></span>
                        </div>
                        <div className="bio-text">
                            {bioData?.bio}
                            {bioData?.Name == "Chandra Prakash" ? <a href="mailto:cp150496@gmail.com">cp150496@gmail.com</a> : null}
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}
