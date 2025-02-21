import logo from './assets/logo.png';

export function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 lg:w-80 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
          Your Project
        </h2>
        <div>
          <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
            + Add project
          </button>
        </div>
        <ul className='mt-8'>
          <li className='flex justify-between my-4'>
            <button className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'>
              Learning react
            </button>
          </li>
          <li className='flex justify-between my-4'>
            <button className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'>
              Mastering React
            </button>
          </li>
        </ul>
      </aside>

      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li className='flex justify-between my-4'>
            <button className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li className='flex justify-between my-4'>
            <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
              Save
            </button>
          </li>
        </menu>
        <div>
          <p className='flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold uppercase text-stone-500'>
              Lorem
            </label>
            <input className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-600' />
          </p>
          <p className='flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold uppercase text-stone-500'>
              Lorem
            </label>
            <textarea className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-600' />
          </p>
        </div>
      </div>
    </main>
  );
}
