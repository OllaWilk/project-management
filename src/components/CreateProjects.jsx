import React, { useRef } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const CreateProjects = ({ onCancel, onSave }) => {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDate = useRef();

  const handleSave = () => {
    const title = inputTitle.current.value;
    const description = inputDescription.current.value;
    const date = inputDate.current.value;

    /* TO DO VALIDATION */

    onSave({
      title,
      description,
      date,
    });

    inputTitle.current.value = '';
    inputDescription.current.value = '';
    inputDate.current.value = '';
  };

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li className='flex justify-between my-4'>
          <Button
            onClick={onCancel}
            name='Cancel'
            cssStyle='hover:text-stone-500'
          />
        </li>
        <li className='flex justify-between my-4'>
          <Button
            name='Save'
            cssStyle='bg-stone-800 text-stone-50 hover:bg-stone-950'
            onClick={handleSave}
          />
        </li>
      </menu>
      <Input label='title' ref={inputTitle} />
      <Input label='description' textarea ref={inputDescription} />
      <Input label='due date' ref={inputDate} />
    </div>
  );
};
