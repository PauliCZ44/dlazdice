import React from 'react';

const DlazdiceView = ({content, classes, link}) => {
    classes = "dlazdice__box ".concat(classes)
    let styles = {
        backgroundImage: `url("${link}")`
    }
    return ( 
        <a href={link} className={classes}>
            <div className={classes}  style={styles}>{content}</div>
        </a>
     );
}
 
export default DlazdiceView;