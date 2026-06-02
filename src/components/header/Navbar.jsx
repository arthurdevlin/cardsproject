import { LuSearch } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";

//mapped my navitems to an array of objects for better scalability and maintainability

const navLinks = [
  { id: "services", label: "Services", href: "#services" },
  { id: "bookings", label: "Bookings", href: "#bookings" },
  { id: "contacts", label: "Contacts", href: "#contacts" },
  { id: "about", label: "About", href: "#about" },
];

import Button from "../Button";

const Navbar = () => {
  return (
    <>
      <nav className="fixed flex w-full gap-4 items-center justify-between p-4 bg-primary right-0 mx-auto top-2  backdrop-blur-md shadow-sm">
        {/*Logo Section*/}
        <div className="text-2xl font-bold text-foreground cursor-pointer">
          Xplore.MW
        </div>

        {/*Menu Section */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 rounded-full h-9 z-50 ">
          <ul className="flex gap-8 ">
            {navLinks.map((item) => (
              <li className="relative group " key={item.id}>
                <a
                  href={item.href}
                  className="text-gray-600 font-medium  group-hover:text-blue-900 transition-colors duration-300 active:text-blue-900"
                >
                  {item.label}
                  <span className="absolute bg-blue-900 w-0 h-0.5 left-0 -bottom-0.5 rounded-3xl transition-all duration-300 group-hover:w-full active:width-full "></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*Search Bar*/}
        <div className="flex rounded-full bg-white bg-opacity-80 backdrop-blur-sm justify-between items-center px-3 py-1">
          <input
            className="bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full items-center px-4 py-1 text-sm text-gray-600 placeholder-gray-400 transition-colors duration-300  focus:border-blue-500 w-32 md:flex hidden cursor-pointer focus:scale-105 focus:shadow-lg focus:shadow-blue-500/50 focus:transition-transform focus:duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:transition-transform hover:duration-300"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-4">
          <LuSearch className="flex md:hidden text-gray-500  scale-150 transition-transform duration-300 hover:scale-175" />
          <LuMenu className="flex md:hidden text-gray-500  scale-150 transition-transform duration-300 hover:scale-175" />
        </div>

        {/*Log in button - inline on md and above, only on small screens */}
        <div className="hidden md:flex items-center">
          <Button className="hover:transition-transform hover:duration-300 hover:scale-105 hover:shadow-lg">
            Log in
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
