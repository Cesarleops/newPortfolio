const Header = () => {
  return (
    <header className="flex w-screen justify-between items-center h-10 p-4">
      <nav>
        <ul className="flex gap-5 [& > ul > li]: text-primary font-noirlight">
          <li className="hover:text-white duration-200 ">About</li>
          <li className="hover:text-white duration-200">Experience</li>
          <li className="hover:text-white duration-200">Projects</li>
        </ul>
      </nav>
      <section>
        <p className="text-primary font-noirlight">Do your own thing</p>
      </section>
    </header>
  );
};

export default Header;
