import React from 'react';
import style from './ContentWrapper.module.css'

const ContentWrapper = ({children, className})=>{
    return(
        <div className={`${style.wrapperContainer} ${className}`} >
            {children}
        </div>
    )
}

export default ContentWrapper;