import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AsideMenu } from './components/AsideMenu';
import { CreateProjects } from './components/CreateProjects';
import { NoProject } from './components/NoProject';
import { SelectedProject } from './components/SelectedProject';

export function App() {
  const [projects, setProjects] = useState({});
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  console.log(projects);
  const handleAddTask = (projectId, task) => {
    console.log(projectId, task);
    setProjects((prevProjects) => {
      const updatedProject = {
        ...prevProjects[projectId],
        tasks: [...prevProjects[projectId].tasks, { text: task, id: uuidv4() }],
      };

      return {
        ...prevProjects,
        [projectId]: updatedProject,
      };
    });
  };

  const handleDeleteTask = (projectId, taskId) => {
    console.log(projectId, taskId);
    setProjects((prevProjects) => {
      const updatedProjects = {
        ...prevProjects[projectId],
        tasks: prevProjects[projectId].tasks.filter(
          (task) => task.id !== taskId
        ),
      };

      return {
        ...prevProjects,
        [projectId]: updatedProjects,
      };
    });
  };

  const handleStartCreatingProject = () => {
    setIsCreatingProject(true);
  };

  const handleCancelProject = () => {
    setIsCreatingProject(false);
  };

  const handleSaveProject = (projectData) => {
    const id = uuidv4();
    const newProject = { ...projectData, id };

    setProjects((prevProjects) => ({
      ...prevProjects,
      [id]: newProject,
    }));
    setIsCreatingProject(false);
  };

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    setIsCreatingProject(false);
  };

  const handleDelete = (id) => {
    setProjects((prevProjects) => {
      const updatedProjects = { ...prevProjects };
      delete updatedProjects[id];
      return updatedProjects;
    });

    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    }
  };

  const selectedProject = projects[selectedProjectId] || null;

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
        <SelectedProject
          onDelete={handleDelete}
          project={selectedProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      ) : (
        <NoProject onStartAddProject={handleStartCreatingProject} />
      )}
    </main>
  );
}
