import React from 'react';

const DlazdiceView = ({content, classes}) => {
    classes = "dlazdice__box ".concat(classes)
    return ( 
        <div className={classes}>{content}</div>
     );
}
 
export default DlazdiceView;