import { FaRegLightbulb } from "react-icons/fa";
import AboutmeItems from "./AboutmeItems";
let data = [
  {
    Question: "Introduce Yourself",
    Answer:
      '("Hello world"), My Name is Sachyam Dahal. I am currently a college graduate persuing my interest in Computer Science. I value Myself as a Passionate and an Enthusiastic Learner  ',
  },
  {
    Question: "Why Programming",
    Answer:
      "Programming, Yet considered difficult, bears many fruitful results when done with right mindset. Personally, for me, Programming is a pathway for me to Establish my Ideas and Creations. <!-- I Enjoy building New Things -->",
  },
  {
    Question: "What have you learned",
    Answer:
      "I have an understanding regarding Data Structure and Algorithms(DSA). Foundation in Python. Not to mention, Front End Development using React, Vite and Typescript",
  },
  { Question: "What does the Future Hold ", Answer: "With My interest overlapping with the technological field, I would like to persue my career in Software Engineering with the intention of creating a Space to Build interesting and Meaningful Programs." },
];
export const About_me = () => {
  return (
    <div id="aboutme" className="relative">
      <img
        src="images/spacemid.jpg"
        className=" w-full h-screen object-cover"
      ></img>
      <div className="absolute w-full h-screen top-0 bg-gradient-to-b from-white/30 to bg-black/20">
        <div className="max-w-[1040px] bg-black/20 rounded-full h-screen m-auto md:py-16 p-4 break-words">
          <h1 className="font-bold text-4xl ml-32 mr-32 pt-4 pb-4 rounded-full bg-gradient-to-r from-teal-500 to bg-yellow-400 flex justify-center shadow-lg shadow-orange-500 border-4">
            {" "}
            ABOUT ME <FaRegLightbulb size={0} />{" "}
          </h1>
          {data.map((item, ind) => (
            <AboutmeItems
              key={ind}
              Question={item.Question}
              Answer={item.Answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
