import React from 'react';

export const Button = ({ name, cssStyle, onClick }) => {
  return (
    <button className={`px-6 py-2 rounded-md ${cssStyle} `} onClick={onClick}>
      {name}
    </button>
  );
};
