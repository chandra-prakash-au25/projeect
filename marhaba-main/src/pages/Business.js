import Accordion from '../components/Accordion';
import AnimationLine from '../components/AnimationLine';
import CommonHead from '../components/CommonHead';
import '../style.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/bussiness';
import { fetchProducts1 } from '../redux/bussiness-tog';
import { useEffect } from 'react';

const Bussiness = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state?.Business)
    const counter2 = useSelector((state) => state?.Businesstog)
    const headData = counter?.data?.data?.[0]?.attributes;
    const accordData = counter2?.data?.data;

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchProducts1());

    }, [])

    return (
        <div className='contain'>
            <CommonHead commonheaddata={headData} />
            <div className='foot-type'>
                <div className='right'>
                    <div className='foottype-cont'>
                        <h2 className='head-name'>Our Services &</h2>
                        <h2 className='head-title'>Maintainence</h2>
                    </div>
                    <AnimationLine />
                    <Accordion accordiondata={accordData} classs="" />
                </div>
            </div>
        </div>
    )
}

export default Bussiness