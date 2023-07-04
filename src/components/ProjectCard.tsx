import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
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
    <section className="relative bg-secondary p-5 rounded-lg sm:w-[300px] xl:h-[350px]">
      <h4 className="text-2xl text-primary">{title}</h4>
      <article className="max-w-sm mb-2">
        <p className="text-terciary">{description}</p>
      </article>
      <article className="flex max-w-[310px] flex-wrap gap-2 ">
        {stack.map((tec) => (
          <p className="whitespace-normal p-1 rounded-lg bg-primary ">{tec}</p>
        ))}
      </article>
      <ul className="absolute top-3 right-3 flex gap-3 text-xl ">
        <li>
          <AiOutlinePlayCircle className="text-terciary" />
        </li>
        <li>
          <BsGithub className="text-terciary" />
        </li>
        <li>
          <GrGallery className="bg-terciary" />
        </li>
      </ul>
    </section>
  );
};

export default ProjectCard;
