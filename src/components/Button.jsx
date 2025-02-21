import React from 'react';

export const Button = ({ name, cssStyle }) => {
  return (
    <button className={`px-6 py-2 rounded-md ${cssStyle} `}>{name}</button>
  );
};
