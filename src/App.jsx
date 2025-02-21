import { useState } from 'react';
import { AsideMenu } from './components/AsideMenu';
import { CreateProjects } from './components/CreateProjects';
import { NoProject } from './components/NoProject';

export function App() {
  const [addProject, setAddProject] = useState(false);

  const handleAddProject = () => {
    setAddProject(true);
  };

  const handleCancelProject = () => {
    setAddProject(false);
  };

  return (
    <main className='h-screen my-8 flex gap-8'>
      <AsideMenu onClick={handleAddProject} />
      {addProject ? (
        <CreateProjects onClick={handleCancelProject} />
      ) : (
        <NoProject onClick={handleAddProject} />
      )}
    </main>
  );
}
