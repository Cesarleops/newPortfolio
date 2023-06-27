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
    <section className="bg-red-200">
      <header className="flex gap-6">
        <p>{longevity}</p>
        <hgroup>
          <h4>{job}</h4>
          <h5>{position}</h5>
        </hgroup>
      </header>
      <section>
        <article className="max-w-lg text-right">
          {paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </article>
        <article className="max-w-md">
          {technologies?.map((tech) => (
            <p>{tech}</p>
          ))}
        </article>
      </section>
    </section>
  );
};

export default ExperienceCard;
