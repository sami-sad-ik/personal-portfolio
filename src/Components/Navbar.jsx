import { HiOutlineDocumentText } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-10 p-5 lg:px-14 flex justify-between items-center h-16 shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundClip: "padding-box",
      }}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex justify-between font-semibold">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
        <div>
          <a className="text-2xl font-bold tracking-tighter" href="#home">
            <img src="/img.png" className="w-10 h-auto" />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between gap-8 font-semibold">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <ThemeToggle />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-lg font-semibold bg-amber-500 hover:bg-amber-600 transition-colors px-3 py-1 rounded-md ">
          Resume <HiOutlineDocumentText />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
