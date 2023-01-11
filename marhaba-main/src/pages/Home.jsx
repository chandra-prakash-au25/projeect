import { useEffect, useRef } from 'react'
import intro from '../assets/intro.mp4'
import marhabaLogo from '../assets/images/Marhaba_logo.png'
import { PageInfo } from '../components/PageInfo'
import coda from '../assets/images/coda.png'
import kornchain from '../assets/images/kornchain.png'
import mazaya from '../assets/images/mazaya.png'
import asfar from '../assets/images/asfar.png'
import Swiper1 from "./Swiper1"
import { Link } from 'react-router-dom'
import AnimationLine from '../components/AnimationLine';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { LeftAnimation } from '../components/LeftAnimation';
// import { useSelector } from 'react-redux';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".page2-logo"),
      {
        opacity: 0,
        y: 150
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".home-page2"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".page2-text"),
      {
        opacity: 0,
        y: 150
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".home-page2"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".page3-text"),
      {
        opacity: 0,
        y: 200
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".home-page3"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".page4-top"),
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".home-page4"),
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".page4-bottom"),
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".home-page4"),
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".our-partners"),
      {
        opacity: 0,
        y: 150
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".home-page5"),
          start: "top center",
          end: "50px",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".comp-img-links"),
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".our-partners"),
          start: "bottom center",
          end: "50px",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".merchant-network"),
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".comp-img-links"),
          start: "bottom center",
          end: "50px",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector(".swiper"),
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".merchant-network"),
          start: "bottom center",
          end: "-231px",
          scrub: true
        }
      }
    )
  }, [])


  return (

    <div className='home d-flex flex-column' ref={ref}>
      <video autoPlay muted className='home-video'>
        <source src={intro} type="video/mp4" />
      </video>
      <div className='home-page2 d-flex flex-column align-items-center'>
        <img className='page2-logo' src={marhabaLogo} alt="logo" />
        <span className='page2-text'>SC softsolution is a business growth solution provider. We are the troupe of growth hackers encompassed with 45+ years of cumulative experience in customer acquisition and engagement diversified across Retail , Banking and Information technology industry.</span>
      </div>
      <div className="home-page3 d-flex flex-column align-items-left">
        <span className='page3-text '>Our creative and innovative approach along with a strong relationship with our partner network will create road map for business growth, revenue and profitability.</span>
      </div>
      <div className="home-page4">
        <div className='page4-top d-flex flex-column'>
          <div className='d-flex'>
            <span className='page4-top-link '>
              <Link to='/business'>
                <PageInfo props={{ title1: "Business", title2: "Growth Partnership" }} />
              </Link>
            </span>
            <span className='page4-top-link'>
              <Link to='/loyalty'>
                <PageInfo props={{ title1: "Loyalty and", title2: "Engagement Growth" }} />
              </Link>
            </span>
          </div>
          <div className='d-flex'>
            <span className='page4-bottom-link'>
              <Link to='/digital' >
                <PageInfo props={{ title1: "Digital", title2: "Transformation" }} />
              </Link>
            </span>
            <span className='page4-bottom-link'>
              <Link to='/teams'>
                <PageInfo props={{ title1: "Our", title2: "Team" }} />
              </Link>
            </span>
          </div>
        </div>
        <div className='page4-bottom d-flex align-items-center justify-content-end'>
          <span className='page4-bottom-text'>We know that business growth requires a holistic approach beyond the business plan which needs right program, right tool and right partner. Marhaba is committed to walk along with you as your 360 growth partner.</span>
        </div>
      </div>
      <div className="home-page5">
        <div className='d-flex flex-column our-partners'>
          <span className='page-title'>Our</span>
          <span className='page-title-bold'>Partners</span>
          <AnimationLine />
        </div>
        <div className='my-5 d-flex justify-content-between p-2 comp-img-links'>
          <a href="https://www.codapayments.com/" target='_blank' rel="noreferrer"><img className='page5-comp-img' src={coda} alt="codaImg" /></a>
          <a href="https://www.kornchain.com/" target='_blank' rel="noreferrer"><img className='page5-comp-img' src={kornchain} alt="kornChainImg" /></a>
          <a href="https://asfargroup.ae/" target='_blank' rel="noreferrer"><img className='page5-comp-img' src={asfar} alt="asfarImg" /></a>
          <a href="http://" target='_blank' rel="noreferrer"><img className='page5-comp-img' src={mazaya} alt="mazayaImg" /></a>
        </div>
        <div className='d-flex flex-column align-items-end merchant-network'>
          <span className='page-title'>Merchant</span>
          <span className='page-title-bold'>Network</span>
          <LeftAnimation />
        </div>
        <div className='mt-3 swiper'> <Swiper1 /> </div>
      </div>
    </div>
  )
}

export default Home