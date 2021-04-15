import React from 'react';
import DlazdiceInput from './DlazdiceInput';

const TableSetting = (props) => {
    return (  
    <table className={props.classes}>
    <thead>
      <tr>
        <th>Sort</th>
        <th>BG</th>
        <th>TEXT</th>
        <th>LINK</th>
        <th></th>
        <th>↓</th>
        <th>Order</th>
        </tr>
    </thead>
    <tbody>

    {/* Rendering dlazdices input rows */}
    {props.dlazdice
      .sort((a, b) => a.order - b.order)
      .map(d => {
        return (
            <DlazdiceInput handleRemoveDlazdice={handleRemoveDlazdice} dlazdice={d} key={d.id} handleChangeContent={handleChangeContent} handleChangeLink={handleChangeLink} />
        )
      })}
    </tbody>
  </table> 
  );
}
 
export default TableSetting;