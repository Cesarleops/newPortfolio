import "./home.css";
const HomeCards = () => {
  return (
    <section className="w-screen flex flex-col pb-10 xl:flex justify-center items-center gap-10 bg-gradient-to-r from-[#000000] to-[#434343]  mb-30">
      <section className="px-2 ease-in-out duration-300 w-[300px] h-[300px] bg-terciary  flex justify-center items-center rounded-md shadow-xl hover:scale-105">
        <a
          style={{
            "--content": "Find more about me!",
            "--start-color": "red",
            "--end-color": "blue",
            "--delay": "0s",
          }}
          href="/about"
          className={`font-noirpro text-5xl relative popi `}
        >
          Find more about me!
        </a>
      </section>
      <section className="px-2 ease-in-out duration-300 w-[300px] h-[300px] bg-terciary shadow-xl    flex justify-center items-center rounded-md   hover:scale-x-105 ">
        <a
          style={{
            "--start-color": "#2457e3",
            "--end-color": "#13f61f",
            "--content": "Experience",
            "--delay": "3s",
          }}
          href="/experience"
          className={`font-noirpro text-5xl relative pipi`}
        >
          Experience
        </a>
      </section>
      <section className="px-2 mb-[20px] ease-in-out duration-300 w-[300px] h-[300px] bg-terciary shadow-xl    flex justify-center items-center rounded-md   hover:scale-y-105">
        <a
          style={{
            "--start-color": "#667eea",
            "--end-color": "#764ba2",
            "--content": "My software projects",
            "--delay": "6s",
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
