import React, { useRef } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import Tasks from './Tasks';

export const SelectedProject = ({ project, onDelete }) => {
  const { id, title, date, description, tasks } = project;
  const modal = useRef();

  const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleDeleteClick = () => {
    modal.current.open();
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>
          Are you sure you want to delete this project?
        </h2>
        <button
          onClick={() => onDelete(id)}
          className='w-[100%] px-6 py-2 mb-4 rounded-md bg-green-800 text-stone-50 hover:bg-green-950'
        >
          yes
        </button>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-stone-600 mb-2'>{title}</h1>
            <Button name='delete' onClick={handleDeleteClick} />
          </div>
          <p className='mb-4 text-stone-400'>{formattedDate}</p>
          <p className='mb-4 text-stone-600 whitespace-pre-wrap'>
            {description}
          </p>
        </header>
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
