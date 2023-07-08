import "./home.css";
const HomeCards = () => {
  return (
    <section className="bg-[#0079EB] w-screen h-screen flex flex-col pb-10 justify-center items-center gap-10  pt-2 lg:flex-row lg:justify-center lg:items-center  mb-30">
      <section
        style={{ viewTransitionName: "experience-anima" }}
        className="px-2 ease-in-out duration-300 w-[300px] h-[300px] bg-terciary shadow-xl  flex justify-center items-center rounded-md   hover:scale-x-105 "
      >
        <a
          style={{
            "--start-color": "#2457e3",
            "--end-color": "#13f61f",
            "--content": "Experience",
            "--delay": "0s",
          }}
          href="/experience"
          className={`font-noirpro text-5xl relative pipi`}
        >
          Experience
        </a>
      </section>
      <section
        style={{ viewTransitionName: "project-anima" }}
        className="px-2 mb-[20px] ease-in-out duration-300 w-[300px] h-[300px] bg-terciary shadow-xl    flex justify-center items-center rounded-md   hover:scale-y-105"
      >
        <a
          style={{
            "--start-color": "#667eea",
            "--end-color": "#764ba2",
            "--content": "My software projects",
            "--delay": "3s",
          }}
          href="/projects"
          className={`font-noirpro text-5xl relative pupu`}
        >
          My software projects
        </a>
      </section>
    </section>
  );
};

export default HomeCards;
