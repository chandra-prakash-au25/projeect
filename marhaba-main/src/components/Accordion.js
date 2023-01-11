import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useState } from 'react';
import "../style.css"

const Accordion = ({ accordiondata,classs }) => {
    const [display1, setDisplay1] = useState(0)
    console.log(accordiondata,'===')
    const setToggle1 = (index) => {
        if (index === display1) setDisplay1(0);
        else setDisplay1(index)
    }

    return (
        <div className='loyal' >
            {
                accordiondata?.map((data, index) => {
                    return <>
                        <div className='foot-toggle d-flex px-3' onClick={() => setToggle1(index + 1)}>
                            <h5 className='head m-0' id={classs}>{data?.attributes?.head}</h5>
                            <h5 className="font1" id={classs}>{display1 === index + 1 ? <BsChevronUp /> : <BsChevronDown />}</h5>
                        </div>
                        <div className="px-1" >
                            {
                                display1 === index + 1 && <p className='data-1'>
                                    {data?.attributes?.data}
                                </p>
                            }
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default Accordion