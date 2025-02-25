import React, { useState } from 'react';
import { Button } from './Button';
import { CreateTask } from './CreateTask';

const Tasks = ({ tasks, onAddTask, id, onDeleteTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(id, task);
      setTask('');
    }
  };

  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'> Tasks</h2>
      <CreateTask
        onAddTask={handleAddTask}
        onChangeInputTask={handleChange}
        task={task}
      />
      {tasks.length === 0 ? (
        <p className='text-stone-800 my-4'>
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map((task) => (
            <li
              key={task.id}
              className='text-stone-800 my-2 flex justify-between my-4'
            >
              <span>{task.text}</span>
              <button
                className='text-stone-700 hover:text-red-500'
                onClick={() => onDeleteTask(id, task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
