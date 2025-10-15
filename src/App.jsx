import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <section id="about" className="py-16 px-4 text-center md:text-left">
        <h2 className="mt-28 my-10 lg:mt-0 text-4xl text-center font-bold">
          About me
        </h2>
        <p className=" max-w-2xl mx-auto leading-relaxed">
          I'm <span className="font-semibold">Sami</span> — a passionate{" "}
          <span className="font-semibold">MERN Stack Developer </span>
          and a student of Textile Engineering who loves building creative and
          responsive web applications.
        </p>
        <p className=" max-w-2xl mx-auto mt-4 leading-relaxed">
          I enjoy turning ideas into real-world digital experiences using
          technologies like
          <span className="font-medium">
            {" "}
            React, Node.js, Express.js, MongoDB, and Tailwind CSS.
          </span>
          I’m constantly learning new tools and improving my problem-solving
          skills to become a better full-stack developer.
        </p>
        <p className=" max-w-2xl mx-auto mt-4 leading-relaxed">
          My goal is to work with global clients and teams to build impactful
          web apps while growing as a professional developer.
        </p>
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
