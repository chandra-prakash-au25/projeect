import React from 'react'
import { PageInfoLine } from './PageInfoLine'

export const PageInfo = ({ props }) => {
    return (
        <div className=' d-flex flex-column'>
            <span className='page-title'>{props.title1}</span>
            <span className='page-title-bold'>{props.title2}</span>
            <span className='back-link mb-3'>Read More</span>
            <PageInfoLine />
        </div>
    )
}
