import { TypeAnimation } from "react-type-animation";

const MainBody = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src="images/space.jpg"
      ></img>
      <div className="w-full h-screen bg-white/20 absolute top-0 left-0">
        <div className="max-w-[700px] h-full m-auto flex flex-col justify-center lg: items-center">
          <h1 className="sm:text-4xl text-3xl font-bold cursor-default text-gray-100  hover:scale-110 ease-out duration-100">Greetings,</h1>
          <h2 className="sm:text-6xl text-5xl font-bold cursor-default text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to bg-teal-400  hover:scale-110 ease-out duration-100">I'm Sachyam Dahal</h2>

          <TypeAnimation className="font-bold cursor-default text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600  hover:scale-110 ease-out duration-100 m-4"
            sequence={[
              "Passionate",
              2500,
              "Tech Enthusiast",
              2500,
              "Developer",
              2500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2.3em", display: "inline-block" }}
            repeat={Infinity}
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default MainBody;
