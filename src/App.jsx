import { AsideMenu } from './components/AsideMenu';
import { CreateProjects } from './components/CreateProjects';

export function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <AsideMenu />
      <CreateProjects />
    </main>
  );
}
