import React, { useState } from 'react';

const NavBar = ({ profile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#5540af]">
      <nav className="py-3 sm:py-5 bg-primary text-white">
        <div className="container flex items-center justify-between mx-auto">
          <div>
            <a href="/">
              <h2 className="text-white text-2xl font-bold">{profile.title}</h2>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <NavLinks />
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <i className="bx bx-x text-3xl text-white"></i>
              ) : (
                <i className="bx bx-menu text-4xl text-white"></i>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70">
          <div className="container flex flex-col items-center justify-center h-screen text-white">
            <button className="absolute top-5 right-5" onClick={toggleMobileMenu}>
              <i className="bx bx-x text-3xl"></i>
            </button>
            <NavLinks onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

const NavLinks = ({ onClick }) => (
  <>
    <NavLink href="/#about" onClick={onClick}>
      About
    </NavLink>
    <NavLink href="/#services" onClick={onClick}>
      Services
    </NavLink>
    {/* <NavLink href="/#portfolio" onClick={onClick}>
      Portfolio
    </NavLink> */}
    {/* <NavLink href="/#clients" onClick={onClick}>
      Clients
    </NavLink> */}
    {/* <NavLink href="/#blogs" onClick={onClick}>
      Work
    </NavLink> */}
    <NavLink href="/#statistics" onClick={onClick}>
      Statistics
    </NavLink>
    {/* <NavLink href="/blogs" onClick={onClick}>
      Blog
    </NavLink> */}
    <NavLink href="/#contact" onClick={onClick}>
      Contact
    </NavLink>
  </>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="cursor-pointer block py-2 transition duration-300 ease-in-out hover:bg-opacity-70"
  >
    {children}
  </a>
);

export default NavBar;
