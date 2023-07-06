export interface ProjectCardProps {
  id: string;
  title: string;
  description?: string;
  stack?: string[];
  image?: string;
  gitHub?: string;
  demo?: string;
}
const ProjectCard = ({ title, id }: ProjectCardProps) => {
  return (
    <section
      className="relative bg-secondary p-5 rounded-lg sm:w-[300px] xl:h-[350px]"
      style={{ viewTransitionName: `project-${id}` }}
    >
      <a href={`${id}`}>GO</a>
      <h4 className="text-2xl text-primary">{title}</h4>
    </section>
  );
};

export default ProjectCard;
