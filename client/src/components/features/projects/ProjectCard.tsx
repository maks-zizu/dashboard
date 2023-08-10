import React from 'react';
import { Project } from './type';

function ProjectCard({ project }: { project: Project }): JSX.Element {
  return <div>{project.name}</div>;
}

export default ProjectCard;
