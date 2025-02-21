import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const CreateProjects = () => {
  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li className='flex justify-between my-4'>
          <Button name='Cancel' cssStyle='hover:text-stone-500' />
        </li>
        <li className='flex justify-between my-4'>
          <Button
            name='Save'
            cssStyle='bg-stone-800 text-stone-50 hover:bg-stone-950'
          />
        </li>
      </menu>
      <Input label='title' />
      <Input label='description' textarea />
      <Input label='due date' />
    </div>
  );
};
