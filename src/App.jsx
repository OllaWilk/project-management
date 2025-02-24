import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AsideMenu } from './components/AsideMenu';
import { CreateProjects } from './components/CreateProjects';
import { NoProject } from './components/NoProject';
import { SelectedProject } from './components/SelectedProject';

export function App() {
  const [projects, setProjects] = useState([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleStartCreatingProject = () => {
    setIsCreatingProject(true);
  };

  const handleCancelProject = () => {
    setIsCreatingProject(false);
    setSelectedProjectId(null);
  };

  const handleSaveProject = (projectData) => {
    const newProject = { ...projectData, id: uuidv4() };

    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsCreatingProject(false);
    setSelectedProjectId(newProject.id);
  };

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    setIsCreatingProject(false);
  };

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <main className='h-screen my-8 flex gap-8'>
      <AsideMenu
        onStartAddProject={handleStartCreatingProject}
        projects={projects}
        onSelectProject={handleSelectProject}
      />
      {isCreatingProject ? (
        <CreateProjects
          onCancel={handleCancelProject}
          onSave={handleSaveProject}
        />
      ) : selectedProject ? (
        <SelectedProject project={selectedProject} />
      ) : (
        <NoProject onStartAddProject={handleStartCreatingProject} />
      )}
    </main>
  );
}
