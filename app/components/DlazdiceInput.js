import React from 'react';

const DlazdiceInput = ({placeholder, link, content, id, order, handleRemoveDlazdice}) => {
    return ( 
        <div>
        <span>ikona</span>
        <span className="colorPicker">colorPicker</span>
        <input type="text" name="content" value={content}/>
        <input type="text" name="link" value={link}/>
        <button onClick={() => handleRemoveDlazdice(id)}>Remove</button>
        <button>options</button>
        <span>{order}</span>
        </div>
    );
}
 
export default DlazdiceInput;