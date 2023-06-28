export interface ExperienceProps {
  longevity: string;
  job: string;
  position: string;
  description: string;
  technologies?: string[];
}

const ExperienceCard = ({
  longevity,
  position,
  description,
  job,
  technologies,
}: ExperienceProps) => {
  const paragraphs = description.split("/");
  return (
    <section className="flex flex-col items-center p-5 relative">
      <header className="flex gap-6 ">
        <p className="text-primary">{longevity}</p>
        <h4 className="text-primary">{job}</h4>
      </header>
      <section className="flex flex-col items-center ">
        <article
          className={`${
            job === "Umoob" ? "ml-[390px]" : "ml-48"
          } max-w-[300px]`}
        >
          <h5 className="text-terciary">{position}</h5>
          {paragraphs.map((paragraph) => (
            <p className="text-terciary">
              <small className="text-primary text-center text-xl">-</small>{" "}
              {paragraph}
            </p>
          ))}
        </article>
        <article className="max-w-md">
          {technologies?.map((tech) => (
            <p className="text-terciary">{tech}</p>
          ))}
        </article>
      </section>
    </section>
  );
};

export default ExperienceCard;
