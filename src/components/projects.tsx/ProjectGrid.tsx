import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types/project';

interface ProjectGridProps {
  projects: Project[];
  activeCategory: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, activeCategory }) => {
  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
          category={project.category}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;