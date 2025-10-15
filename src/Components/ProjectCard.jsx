import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const { image, title, description, technologies, liveLink } = project;
  return (
    <div className=" p-5 shadow-md rounded-md bg-base-300 flex flex-col items-center space-y-3 min-h-[480px]">
      <div className=" overflow-hidden rounded-md">
        <img
          src={image}
          alt="image"
          className=" w-full h-48 object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="space-y-3 flex-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm font-medium text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-2 ">
          {technologies.map((technology, idx) => (
            <p
              key={idx}
              className="px-2 py-1 text-xs font-semibold text-base-100 text-center tracking-wider rounded-full bg-zinc-400 ">
              {technology}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full">
        <a href={liveLink} target="_blank">
          <FiExternalLink size={25} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
