import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import ProjectCard from './ProjectCard';
import { projectsInit } from './projectsSlice';
import './styles/Projects.css';

function ProjectsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const projects = useSelector((store: RootState) => store.projects.projects);
  useEffect(() => {
    dispatch(projectsInit());
  }, [dispatch]);
  return (
    <div className="projectList_container">
      <h2>Ваши проекты:</h2>
      <div className="projectsList">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
