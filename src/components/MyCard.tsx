import { MdOutlineMailOutline } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Header from "./Header";
const MyCard = () => {
  return (
    <main className="flex flex-col justify-start items-center gap-5 h-screen bg-blue-400">
      <Header />
      <section className="mt-40 space-y-10">
        <hgroup className="space-y-1 text-center">
          <h1 className="text-8xl">Cesar Leyton</h1>
          <h3 className="text-3xl">Fullstack Developer</h3>
        </hgroup>
        <section>
          <nav>
            <ul className="flex items-center justify-center gap-8">
              <li>
                <MdOutlineMailOutline className="text-5xl" />
              </li>
              <li>
                <BsGithub className="text-4xl" />
              </li>
              <li>
                <BsLinkedin className="text-4xl" />
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </main>
  );
};

export default MyCard;
