import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from './type';

function ProjectCard({ project }: { project: Project }): JSX.Element {
  return (
    <div>
      <Link to={`/api/tasks/${project.id}`}>
        <h2>{project.name_project}</h2>
      </Link>
    </div>
  );
}

export default ProjectCard;
