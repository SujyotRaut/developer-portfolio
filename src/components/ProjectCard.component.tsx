interface PropTypes {
  thumbnail?: string;
  title: string;
  content: string;
  demo: string;
  github: string;
}

function ProjectCard({ thumbnail, title, content, demo, github }: PropTypes) {
  return (
    <div className="p-4 bg-black flex flex-col gap-4 text-left">
      <img className="h-40" src={thumbnail} alt="project-showcase" />
      <div className="">{title}</div>
      <div className="">{content}</div>
      <div className="flex text-center">
        <a className="flex-1" href={demo}>
          Demo
        </a>
        <a className="flex-1" href={github}>
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
