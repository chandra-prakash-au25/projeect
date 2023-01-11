import one from '../assets/images/swiperImg/1.png'
import two from '../assets/images/swiperImg/2.png'
import three from '../assets/images/swiperImg/3.png'
import four from '../assets/images/swiperImg/4.png'
import five from '../assets/images/swiperImg/5.png'
import six from '../assets/images/swiperImg/6.png'
import seven from '../assets/images/swiperImg/7.png'
import eight from '../assets/images/swiperImg/8.png'
import nine from '../assets/images/swiperImg/9.png'
import ten from '../assets/images/swiperImg/10.png'
import eleven from '../assets/images/swiperImg/11.png'
import twelve from '../assets/images/swiperImg/12.png'
import thirteen from '../assets/images/swiperImg/13.png'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Swiper1 = ()=> {
    return (
        <>
            <Swiper
                slidesPerView={7}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 200,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={one} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={two} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={three} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={four} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={five} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={six} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={seven} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={eight} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={nine} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={ten} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={eleven} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={twelve} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={thirteen} alt="" srcset="" /></SwiperSlide>

            </Swiper>
        </>
    );
}

export default Swiper1