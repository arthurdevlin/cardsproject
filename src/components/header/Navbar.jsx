import { LuSearch, LuMenu } from "react-icons/lu";

import Button from "../../Button";
import { useState } from "react";

//mapped my navitems to an array of objects for better scalability and maintainability

const navLinks = [
  { id: "services", label: "Services", href: "#services" },
  { id: "Trending", label: "Trending", href: "#trending" },
  { id: "contacts", label: "Contacts", href: "#contacts" },
  { id: "about", label: "About", href: "#about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-green-950/95 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 text-white text-base font-medium hover:text-green-300 transition-colors duration-200"
        >
          <span className="text-lg">Xplore</span>
          <span className="font-extrabold text-2xl">.MW</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li className="relative group" key={item.id}>
                <a
                  href={item.href}
                  className="text-white opacity-80 text-sm font-light transition-opacity duration-200 hover:opacity-100"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-white/20 hover:bg-white/10"
          >
            <LuSearch className="h-5 w-5" />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <Button>Email Us</Button>
            <Button variant="secondary">Bookings</Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <LuMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-green-950/95">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-white text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <Button className="w-full">Email Us</Button>
              <Button className="w-full" variant="secondary">
                Bookings
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
