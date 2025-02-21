import React from 'react';

export const Title = ({ title }) => {
  return (
    <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
      {title}
    </h2>
  );
};
