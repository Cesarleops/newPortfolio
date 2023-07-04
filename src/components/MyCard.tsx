import { MdOutlineMailOutline } from "react-icons/md";
import { BsLinkedin, BsGithub, BsArrowBarDown } from "react-icons/bs";

import Header from "./Header";
const MyCard = () => {
  return (
    <main className="flex flex-col justify-start items-center gap-5 h-screen w-screen bg-secondary">
      <Header />
      <section className="mt-40 space-y-10">
        <hgroup className="space-y-4 text-center">
          <h1 className="text-8xl font-noirpro text-terciary brightness-105 drop-shadow-md ">
            Cesar Leyton
          </h1>
          <h3 className="text-3xl font-noirlight text-primary">
            Fullstack Developer
          </h3>
        </hgroup>
        <section>
          <nav className="flex flex-col items-center justify-center gap-20">
            <ul className="flex items-center justify-center gap-8 [&>ul>li]: text-terciary ">
              <li>
                <a href="mailto:cesarleyton549@gmail.com" target="_blank">
                  <MdOutlineMailOutline className="text-5xl  hover:text-primary duration-200" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Cesarleops" target="_blank">
                  <BsGithub className="text-4xl  hover:text-primary duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cesar-leyton-a5b879238/"
                  target="_blank"
                >
                  <BsLinkedin className="text-4xl  hover:text-primary transition-colors duration-200" />
                </a>
              </li>
            </ul>
            <div className="animate-bounce w-5 h-5 text-center text-primary text-4xl  ml-1">
              <BsArrowBarDown />
            </div>
          </nav>
        </section>
      </section>
    </main>
  );
};

export default MyCard;
