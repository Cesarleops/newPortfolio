export interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  image: string;
  gitHub?: string;
  demo: string;
}
const ProjectCard = ({
  title,
  demo,
  description,
  image,
  gitHub,
  stack,
}: ProjectCardProps) => {
  return (
    <section>
      <h4>{title}</h4>
      <article className="max-w-sm">
        <p>{description}</p>
      </article>

      <article className="flex max-w-[210px] flex-wrap gap-2 ">
        {stack.map((tec) => (
          <p className="whitespace-normal">{tec}</p>
        ))}
      </article>
    </section>
  );
};

export default ProjectCard;
