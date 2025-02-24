import React from 'react';

export const Project = ({ title, id, onSelectProject }) => {
  return (
    <li className='flex justify-between my-4'>
      <button
        onClick={() => onSelectProject(id)}
        className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
      >
        {title}
      </button>
    </li>
  );
};
