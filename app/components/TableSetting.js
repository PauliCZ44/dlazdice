import React from 'react';
import DlazdiceInput from './DlazdiceInput';
import { SortIconDown } from '../containers/HomePage/icons/svgicons';

const TableSetting = ({
  classes,
  dlazdice,
  handleRemoveDlazdice,
  handleChangeContent,
  handleChangeLink,
}) => {
  return (
    <table className={classes}>
      <thead>
        <tr>
          <th>
            <SortIconDown />
          </th>
          <th>BG</th>
          <th>TEXT</th>
          <th>LINK</th>
          <th />
          <th>↓</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        {/* Rendering dlazdices input rows */}
        {dlazdice
          .sort((a, b) => a.order - b.order)
          .map(d => {
            return (
              <DlazdiceInput
                handleRemoveDlazdice={handleRemoveDlazdice}
                dlazdice={d}
                key={d.id}
                handleChangeContent={handleChangeContent}
                handleChangeLink={handleChangeLink}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default TableSetting;
