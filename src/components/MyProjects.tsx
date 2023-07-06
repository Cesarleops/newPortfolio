import ProjectCard from "./ProjectCard";
import { myProjects } from "../data";

const MyProjects = () => {
  return (
    <main
      className=" w-screen flex flex-col items-center justify-center bg-terciary "
      id="projects"
    >
      <h5 className="text-3xl text-primary  pt-5 xl:pt-10">
        Personal Projects
      </h5>
      <section className="grid grid-cols-3 grid-rows-2 gap-4">
        {Object.keys(myProjects).map((key, i) => (
          <ProjectCard
            title={myProjects[key as keyof typeof myProjects]["title"]}
            id={myProjects[key as keyof typeof myProjects]["id"]}
          />
        ))}
      </section>
    </main>
  );
};

export default MyProjects;
