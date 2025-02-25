import React from 'react';
import { Button } from './Button';

export const CreateTask = () => {
  return (
    <div className='flex intems-center gap-4'>
      <input type='text' className='w-64 px-1 py-1 rounded-sm bg-stone-200' />
      <Button name='Add task' cssStyle='text-stone-700 hover:text-stone-950' />
    </div>
  );
};
