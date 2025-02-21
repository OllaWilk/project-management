import React from 'react';
import logoImage from '../assets/logo.png';
import { Title } from './Title';
import { Button } from './Button';

export const NoProject = ({ onClick }) => {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        className='w-20 h-20 object-contain mx-auto'
        src={logoImage}
        alt='logo'
      />
      <h2 className='text-xl font-bold text-stone-700 my-4'>
        No Project Selected
      </h2>
      <p className='mb-4 text-stone-400'>
        Select a project or get started with anew one{' '}
      </p>
      <p className='mt-8'>
        <Button
          name='Create a new project'
          cssStyle='bg-stone-800 text-stone-50 hover:bg-stone-950'
          onClick={onClick}
        />
      </p>
    </div>
  );
};
