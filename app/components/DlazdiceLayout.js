import React from 'react';
import DlazdiceView from './DlazdiceView';

const DlazdiceLayout = ({dlazdice, layoutStyle, mainText, extraText}) => {

    return ( 
        <>
        <h6 className="extra-text">{extraText}</h6>
        <h3 className="get-inspired">{mainText}</h3>
        <div className={layoutStyle}>
            {dlazdice.map(d => {
            let span = 'span-1'
            /* For elements with order 2,3,8,9,14... make it span-2. If order is divisible by 3 an not by 2, make span-2, and also element before make span-2.*/
            if ( ( ( ( (d.order+1) % 3 === 0) && ( (d.order+1) % 2 !== 0) ) || ( (d.order % 3 === 0) && (d.order % 2 !== 0)) ) && (layoutStyle=='dlazdice__layout-25')) {
                span = "span-2"
            } else {
                span = 'span-1'
            }
            return (
                <DlazdiceView content={d.title} link={d.link} classes={span} key={d.id} />
            )
            })}
        </div>
        </>
     );
}
 
export default DlazdiceLayout;
