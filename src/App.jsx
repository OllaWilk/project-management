import { useState } from 'react';
import { AsideMenu } from './components/AsideMenu';
import { CreateProjects } from './components/CreateProjects';
import { NoProject } from './components/NoProject';

export function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Lorem', description: 'Ipsum', date: '12:32:32' },
  ]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const handleStartCreatingProject = () => {
    setIsCreatingProject(true);
  };

  const handleCancelProject = () => {
    setIsCreatingProject(false);
  };

  const handleSaveProject = (projectData) => {
    const newProject = { ...projectData, id: Math.random() };

    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsCreatingProject(false);
  };

  return (
    <main className='h-screen my-8 flex gap-8'>
      <AsideMenu
        onStartAddProject={handleStartCreatingProject}
        projects={projects}
      />
      {isCreatingProject ? (
        <CreateProjects
          onCancel={handleCancelProject}
          projects={projects}
          onSave={handleSaveProject}
        />
      ) : (
        <NoProject onStartAddProject={handleStartCreatingProject} />
      )}
    </main>
  );
}
