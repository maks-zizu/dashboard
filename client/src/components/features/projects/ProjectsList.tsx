import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import ProjectCard from './ProjectPage';
import { projectsInit } from './projectsSlice';

function ProjectsList():JSX.Element {
  const dispatch = useAppDispatch();
  const projects = useSelector((store: RootState) => store.projects.projects);

  useEffect(() => {
    dispatch(projectsInit());
  }, [dispatch]);
  return (
    <div>
      {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
    </div>
  );
}

export default ProjectsList;