const Header = () => {
  return (
    <header className="flex w-screen justify-between items-center h-10 p-4">
      <nav>
        <ul className="flex gap-5">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </nav>
      <section>
        <p>Do your own thing</p>
      </section>
    </header>
  );
};

export default Header;
