import React from 'react';

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rate}
        onChange={(e) => onRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
