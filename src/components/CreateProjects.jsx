import React, { useRef } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Modal } from './Modal';

export const CreateProjects = ({ onCancel, onSave }) => {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const title = inputTitle.current.value;
    const description = inputDescription.current.value;
    const date = inputDate.current.value;

    if (title.trim() && description.trim() && date.trim()) {
      onSave({
        title,
        description,
        date,
      });
    } else {
      modal.current.open();
      return;
    }

    inputTitle.current.value = '';
    inputDescription.current.value = '';
    inputDate.current.value = '';
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='mb-4 text-stone-800'>
          OOps.. looks like you forgot to enter a value.
        </p>
        <p className='mb-4 text-stone-800'>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
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
        <Input type='date' label='due date' ref={inputDate} />
      </div>
    </>
  );
};
