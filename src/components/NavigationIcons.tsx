import { GiBookshelf } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
interface props {
  value: string;
  IconName: string;
  onClose : ()=> void
}
export const NavigationIconsHome = ({ value, IconName, onClose }: props) => {
  return (
    <a
      onClick={onClose}
      href={value}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
    >
      <AiOutlineHome size={20} />

      <span className="pl-4">{IconName}</span>
    </a>
  );
};

export const NavigationIconsAboutMe = ({ value, IconName, onClose }: props) => {
  return (
    <a
      onClick={onClose}
      href={value}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
    >
      <FaRegLightbulb size={20} />

      <span className="pl-4">{IconName}</span>
    </a>
  );
};

export const NavigationIconsAcademics = ({ value, IconName ,onClose }: props) => {
  return (
    <a
     onClick={onClose}
      href={value}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300"
    >
      <GiBookshelf size={20} />

      <span className="pl-4">{IconName}</span>
    </a>
  );
};
