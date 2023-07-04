import ExperienceCard, { ExperienceProps } from "./ExperienceCard";
const myExperience: {
  Umoob: ExperienceProps;
  Nacional: ExperienceProps;
} = {
  Umoob: {
    longevity: "2022-PRESENT",
    job: "Umoob",
    position: "Fullstack Developer",
    technologies: [
      "Typescript",
      "React",
      "SASS",
      "Python",
      "Django",
      "Storybook",
    ],
    description:
      "Developing responsive and reusable components with React+Typescript based on Figma designs / Maintenance and improvement of the code. / Contribute ideas that improve user experience, development and teamwork. / collaborate with senior engineers following a complete software development cycle including development paradigms,methodologies such as Atomic design and BEM, taking participation in code reviews",
  },
  Nacional: {
    longevity: "2021-PRESENT",
    job: "Universidad Nacional de Colombia",
    position: "Student",
    description:
      "Collaborated with other students in the research groups of computational science and data analysis that belong to the university, where I have been able to develop my problem solving and communication skills  ",
  },
};
const Experience = () => {
  return (
    <main
      className="h-screen flex flex-col items-center justify-center bg-secondary relative "
      id="experience"
    >
      <h4 className="text-3xl text-primary absolute top-10">Experience</h4>
      <section className=" sm:flex items-start gap-10 overflow-x-auto w-screen">
        {Object.keys(myExperience).map((key, i) => (
          <ExperienceCard
            longevity={
              myExperience[key as keyof typeof myExperience]["longevity"]
            }
            job={myExperience[key as keyof typeof myExperience]["job"]}
            description={
              myExperience[key as keyof typeof myExperience]["description"]
            }
            position={
              myExperience[key as keyof typeof myExperience]["position"]
            }
            key={i}
          />
        ))}
      </section>
    </main>
  );
};

export default Experience;
