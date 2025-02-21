import React from 'react';
import { Title } from './Title';
import { Button } from './Button';
import { Project } from './Project';

export const AsideMenu = () => (
  <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 lg:w-80 rounded-r-xl'>
    <Title title='Your Project' />
    <Button
      name='+ Add project'
      cssStyle='text-stone-400 bg-stone-700 hover:bg-stone-600 hover:text-stone-100'
    />
    <ul className='mt-8'>
      <Project title='Lrearning react' />
      <Project title='Lorem Ipsum' />
      <Project title=' dolor set amet' />
    </ul>
  </aside>
);
