
interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200">{category}</p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
          Voir plus
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;