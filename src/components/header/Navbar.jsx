//mapped my navitems to an array of objects for better scalability and maintainability

const navLinks = [
  { id: "services", label: "Services", href: "#services" },
  { id: "bookings", label: "Bookings", href: "#bookings" },
  { id: "contacts", label: "Contacts", href: "#contacts" },
  { id: "about", label: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <>
      <nav className="fixed flex w-full top-1 gap-4 items-center justify-between p-4 bg-primary right-0 mx-auto  backdrop-blur-md shadow-xl">
        {/*Logo Section*/}
        <div className="text-2xl font-bold text-foreground">Xplore.MW</div>
        {/*Menu Section */}
        <div className="hidden md:flex justify-between items-center px-6 py-2 rounded-full h-9 z-50">
          <ul className="flex gap-8 ">
            {navLinks.map((item) => (
              <li className="relative group " key={item.id}>
                <a
                  href={item.href}
                  className="text-gray-600 font-medium  group-hover:text-blue-900 transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute bg-blue-900 w-0 h-0.5 left-0 -bottom-0.5 rounded-3xl transition-all duration-300 group-hover:w-full active:width-full "></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*Search Bar and Humb-Button*/}
        <div className="hidden md:flex rounded-full bg-white bg-opacity-80 backdrop-blur-sm">
          <input
            className="bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full flex items-center px-4 py-1 text-sm text-gray-600 placeholder-gray-400 transition-colors duration-300 focus:border-blue-500 w-32"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>

        {/*Log in button - inline on md and above, fixed only on small screens */}
        <div className="relative right-0 flex items-center">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
            Log in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
