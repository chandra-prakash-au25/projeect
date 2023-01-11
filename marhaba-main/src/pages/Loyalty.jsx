import React from 'react'
import CommonHead from '../components/CommonHead';
import Accordion from '../components/Accordion';
import AnimationLine from '../components/AnimationLine';
import { useSelector, useDispatch } from 'react-redux';
import { fetchloyal } from '../redux/loyal';
import { fetchloyal1 } from '../redux/loyal-tog';
import { useEffect } from 'react';



export const Loyalty = () => {
    const counter = useSelector((state) => state.loyal)
    const counter2 = useSelector((state) => state.loyaltog)
    const headData = counter?.data?.data?.[0]?.attributes;
    const accordData = counter2?.data?.data;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchloyal())
        dispatch(fetchloyal1())
    }, [])
    return (
        <div className='loyalty'>
            <CommonHead commonheaddata={headData} />
            <div className="loyalty-bottom " style={{display:"flex"}}>
                <div className='d-flex flex-column l-bottom-head'>
                    <span className='loyalty-title'>Our comprehensive loyalty and engagement</span>
                    <span className='loyalty-title-bold'>services include:</span>
                    <AnimationLine color='white' />
                    <div className='loyal-imp'>
                        <Accordion accordiondata={accordData} classs="font-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}
