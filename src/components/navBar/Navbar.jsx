import React, { useState } from "react";

const Navbar = ({ sectionRefs }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const headerHeight = 165;

  const handleNavClick = (ref) => {
    setToggle(!toggle); // Also close the mobile menu
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className=" fixed bg-white z-40 py-4 md:px-2 shadow-md w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/" className="flex items-center">
            <span className="text-gray-700 text-5xl font-greatVibes">
              Aji & Dibin
            </span>
          </a>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <ul className="flex flex-row gap-5 font-bold">
            <li onClick={() => handleNavClick(sectionRefs.hero)}>
              Home
            </li>
            <li onClick={() => handleNavClick(sectionRefs.ourStories)}>
              Our Stories
            </li>
            <li onClick={() => handleNavClick(sectionRefs.timeLine)}>
              Wedding Details
            </li>
            <li onClick={() => handleNavClick(sectionRefs.gallery)}>Gallery</li>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center sm:pr-5">
          {/* menuIcon */}
          <button className="text-graylight focus:outline-none z-50">
            <label
              htmlFor="nav_bar_icon"
              className="w-6 h-6 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
            >
              <input
                onClick={() => {
                  setToggle(!toggle);
                }}
                id="nav_bar_icon"
                type="checkbox"
                className="hidden peer"
              />
              <div className="w-full h-1.5 bg-graylight rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]" />
              <div className="w-full h-1.5 bg-graylight rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4" />
              <div className="w-full h-1.5 bg-graylight rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]" />
            </label>
          </button>
          {/* menuIcon */}
          <div
            className={`sidebarMenuContainer w-full h-screen fixed top-0 transition-all ${
              toggle
                ? "right-0 duration-500 ease-in"
                : "right-[-100%] duration-300 ease-in-out"
            } bg-black bg-opacity-40 z-40 flex justify-end`}
          >
            <div className="sideBarChild w-52 h-full bg-white flex justify-center items-center">
              <ul className="flex flex-col gap-4">
                <li
                  className="text-black text-xl w-full border border-black shadow-md px-4 py-2 rounded-full text-center"
                  onClick={() => {
                    handleNavClick(sectionRefs.hero);
                  }}
                >
                  Home
                </li>
                <li
                  className="text-black text-xl w-full border border-black shadow-mdpx-4 py-2 rounded-full text-center"
                  onClick={() => {
                    handleNavClick(sectionRefs.ourStories);
                  }}
                >
                  Our Story
                </li>

                <li
                  className="text-black text-xl w-full border border-black shadow-md  px-4 py-2 rounded-full text-center"
                  onClick={() => {
                    handleNavClick(sectionRefs.timeLine);
                  }}
                >
                  Wedding Details
                </li>
                <li
                  className="text-black text-xl w-full border border-black shadow-md  px-4 py-2 rounded-full text-center"
                  onClick={() => {
                    handleNavClick(sectionRefs.gallery);
                  }}
                >
                  Our Gallery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
