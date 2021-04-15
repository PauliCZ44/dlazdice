import React, {useState} from 'react';
import RemovePng from'../assets/remove-icon.png';

const DlazdiceInput = ({dlazdice, handleRemoveDlazdice, handleChangeContent, handleChangeLink}) => {

    return ( 
        <tr>
        <td>[X]</td>
        <td className="colorPicker">[X]</td>
        <td><input type="text" name="content" value={dlazdice.title} onChange={(e) => handleChangeContent(e, dlazdice.id)}/></td>
        <td><input type="text" name="link" value={dlazdice.link} onChange={(e) => handleChangeLink(e,  dlazdice.id)}/></td>
        <td>
            <a onClick={() => handleRemoveDlazdice(dlazdice.id)} type="button" className="centered-icon">
                <img src={RemovePng} alt="Remove" width="19px" height="20px"/>
            </a>
        </td>
        <td>. . .</td>
        <td><span>{dlazdice.order}</span></td>
        </tr>
    );
}
 
export default DlazdiceInput;