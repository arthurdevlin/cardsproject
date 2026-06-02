import { LuSearch, LuMenu } from "react-icons/lu";
import { CiDark } from "react-icons/ci";

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
      <nav className="fixed z-50 flex w-full gap-3 items-center justify-between p-4 right-0 mx-auto top-2 ">
        {/*Logo Section*/}
        <div className="flex text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors duration-300">
          Xplor.MW
          {/* <span className="relative group bg-blue-950 text-white p-1 text-lg rounded-2xl hover:bg-white hover:text-blue-950 hover:shadow-lg hover:shadow-blue-500/50 hover:transition-transform hover:duration-600 ">
            .MW
          </span> */}
        </div>

        {/*Menu Section */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 rounded-full h-9 z-50 ">
          <ul className="flex gap-8 ">
            {navLinks.map((item) => (
              <li className="relative group " key={item.id}>
                <a
                  href={item.href}
                  className="text-white  font-medium  group-hover:text-blue-300 transition-colors duration-300 active:text-blue-200"
                >
                  {item.label}
                  <span className="absolute bg-blue-900 w-0 h-0.5 left-0 -bottom-0.5 rounded-3xl transition-all duration-300 group-hover:w-full active:width-full "></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*Search Bar*/}
        <div className="flex rounded-full bg-opacity-80 backdrop-blur-sm justify-between items-center px-3 py-1">
          <input
            className="bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full items-center px-4 py-1 text-sm text-white placeholder-gray-200 transition-colors duration-300  focus:border-blue-400 w-32 md:flex hidden cursor-pointer focus:scale-105 focus:shadow-lg focus:shadow-blue-400/50 focus:transition-transform focus:duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50 hover:transition-transform hover:duration-300"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>

        {/*Icons only visible to small screens*/}
        <div className="flex items-center gap-8">
          <LuSearch className="flex md:hidden text-white scale-125 transition-transform duration-300 hover:scale-150" />
          <LuMenu className="flex md:hidden text-white scale-125 transition-transform duration-300 hover:scale-150" />
          <CiDark className="flex text-white bold scale-150 transition-transform duration-300 hover:scale-150 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-400/50 hover:transition-transform hover:duration-300 hover:rounded-full hover:cursor-pointer" />
        </div>

        {/*Log in button - inline on md and above, only on small screens */}
        <div className="hidden md:flex items-center">
          <Button className="">Log in</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
