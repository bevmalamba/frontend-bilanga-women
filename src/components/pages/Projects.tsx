
import { useState } from 'react';
import { projectData } from '../../types/project';
import ProjectsHeader from '../projects.tsx/ProjectsHeader';
import ProjectCategories from '../projects.tsx/ProjectCategories';
import ProjectGrid from '../projects.tsx/ProjectGrid';

const Projects = () => {
  const categories = ['Tous', 'Porcherie', 'Poulailler', 'Maraîchère', 'Cassava'];
  const [activeCategory, setActiveCategory] = useState('Tous');

  return (
    <div>
      <ProjectsHeader/>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">NOS PROJETS</h2>
          <p className="text-gray-600">Nous vous proposons plusieurs projets</p>
        </div>
        <ProjectCategories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectGrid
          projects={projectData}
          activeCategory={activeCategory}
        />
      </div>
    </div>
  );
};

export default Projects;