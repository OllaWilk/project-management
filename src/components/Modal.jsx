import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';

export const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
    >
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button
          name='close'
          cssStyle='bg-stone-800 text-stone-50 hover:bg-stone-950'
        />
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});
