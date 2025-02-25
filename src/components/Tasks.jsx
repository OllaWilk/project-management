import React from 'react';
import { Button } from './Button';
import { CreateTask } from './CreateTask';

const Tasks = ({ tasks }) => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'> Tasks</h2>
      <CreateTask />
      {tasks.length === 0 ? (
        <p className='text-stone-800 my-4'>
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul></ul>
      )}
    </section>
  );
};

export default Tasks;
