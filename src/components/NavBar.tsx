export const NavBar = () => {
  return (
    <nav className=" text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:underline">
            <h1 className="text-4xl font-extrabold uppercase text-primary text-shadow-lg mb-8 text-yellow-500 text-shadow-yellow-800">
              Creperie Le Gall
            </h1>
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Menu
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
