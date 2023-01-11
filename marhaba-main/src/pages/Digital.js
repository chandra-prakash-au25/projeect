import React from 'react'
import CommonHead from '../components/CommonHead';
import Accordion from '../components/Accordion';
import AnimationLine from '../components/AnimationLine';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransform } from '../redux/transform';
import { fetchTransform1 } from '../redux/transform-tog';
import { useEffect } from 'react';



const Digital = () => {
    const counter = useSelector((state) => state.transform)
    const counter2 = useSelector((state) => state.transformtog)
    const dispatch = useDispatch()

    const headData = counter?.data?.data?.[0]?.attributes;
    const accordData = counter2?.data?.data;
    useEffect(() => {
        dispatch(fetchTransform())
        dispatch(fetchTransform1())
    }, [])

    return (
        <div>
            <CommonHead commonheaddata={headData} />
            <div className='foot-type1'>
                <div className='right'>
                    <div className='foottype-cont1'>
                        <h2 className='head-name1'>Our domain expertise</h2>
                        <h2 className='head-title1'>includes:</h2>
                    </div>
                    <AnimationLine color='white' />
                    <div className='loyal-imp'>
                        <Accordion accordiondata={accordData} classs="font-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital