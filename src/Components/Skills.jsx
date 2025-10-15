import javascript from "../assets/JavaScript.png";
import react from "../assets/React.png";
import express from "../assets/Express.png";
import node from "../assets/Node.js.png";
import tailwind from "../assets/Tailwind CSS.png";
import git from "../assets/Git.png";
import mongoDB from "../assets/MongoDB.png";
import jwt from "../assets/jwt.png";
import axios from "../assets/axios.png";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="py-16 text-4xl text-center font-bold">Skills</h2>
      <div className="w-10/12 mx-auto grid md:grid-cols-5 grid-cols-2 gap-5 bg-base-300 py-8 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <img src={javascript} alt="javascript" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Javascript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={react} alt="react" className="w-16 " />
          <p className="my-2 text-lg font-semibold">React</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={node} alt="node" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Node</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={express} alt="express" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Express</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={tailwind} alt="tailwind" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Tailwind</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={mongoDB} alt="mongoDB" className="w-16 " />
          <p className="my-2 text-lg font-semibold">MongoDB</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={git} alt="git" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Git</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={jwt} alt="jwt" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Jwt</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={axios} alt="axios" className="w-16 " />
          <p className="my-2 text-lg font-semibold">Axios</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
