import React from 'react';
import { Button } from './Button';

export const CreateTask = ({ onAddTask, onChangeInputTask, task }) => {
  return (
    <div className='flex intems-center gap-4'>
      <input
        type='text'
        className='w-64 px-1 py-1 rounded-sm bg-stone-200'
        value={task}
        onChange={onChangeInputTask}
      />
      <Button
        name='Add task'
        cssStyle='text-stone-700 hover:text-stone-950'
        onClick={onAddTask}
      />
    </div>
  );
};
