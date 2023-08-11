import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from './type';

function ProjectCard({ project }: { project: Project }): JSX.Element {
  return (
    <div className="projectCard_conteiner">
      <Link className="projectCard_link" to={`/api/tasks/${project.id}`}>
        <div className="projectCard">
          <h2>Проект: {project.name_project}</h2>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
