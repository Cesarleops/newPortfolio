import { BsArrowBarDown } from "react-icons/bs";
const About = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center mb-10 gap-4 bg-terciary">
      <h4 className="text-3xl text-primary font-noirpro">About me</h4>
      <article className="max-w-md flex flex-col items-center justify-center gap-16">
        <p className="text-secondary font-noirlight px-5">
          Two years ago I was playing The witcher 3 and it came to my mind how
          you could create a world that allowed you to take so many different
          paths, so many ways to do things, that made me fell in love with the
          idea of being able to create something from a computer. Started
          studying software engineering and in a web development class something
          clicked, it was exciting to create solutions to problems and that
          those solutions were accessible to anyone. Today I'm building software
          in a fitness startup that seeks to boost the growth of gyms through
          digitalization. Outside of work and studies I enjoy working out,
          videogames and reading.
        </p>
        <BsArrowBarDown className="animate-bounce text-primary text-4xl" />
      </article>
    </section>
  );
};

export default About;
