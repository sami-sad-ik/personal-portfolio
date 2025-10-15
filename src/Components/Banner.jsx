import img from "../assets/profimg.png";

const Banner = () => {
  return (
    <div className="w-10/12 h-[500px] mx-auto my-10 flex md:flex-row flex-col justify-between items-center gap-5 lg:p-20 ">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
            Sami
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          A Passionate MERN Stack Developer
        </h2>
        <p className="text-gray-400 max-w-xl mb-6">
          I build modern, responsive, and high-performing web applications using
          MongoDB, Express, React, and Node.js.
        </p>
      </div>
      <div className="relative mt-20 w-80 h-40 sm:w-80 sm:h-40 bg-amber-400 rounded-t-full flex-shrink-0">
        <div className="absolute bottom-0 right-4 lg:right-3">
          <img
            src={img}
            alt="image"
            className="w-full max-w-[300px] sm:max-w-[320px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
