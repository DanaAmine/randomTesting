import { useState } from "react";
import logo from "../../public/Images/logo.png";
import lightLogo from "../../public/Images/lightLogo.png";

import Dark from "./Dark";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Layout = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };


  return (
    <>
      <div className="h-9  lg:h-16 p-0 m-0 font-normal text-white dark:text-black dark:bg-white font-ProductSans border-solid border-[#303030]  border-b-[0.25px] ">
        <div className="flex justify-between items-center bg-[#1F1F1F] dark:bg-white h-full mx-10 lg:mx-32">

          <img className="w-[6em] h-[.88em] lg:w-[10em] lg:h-[1.5em] dark:hidden" src={logo} alt="" />
          <img className="w-[6em] h-[.88em] lg:w-[10em] lg:h-[1.5em] dark:block hidden" src={lightLogo} alt="" />

          <div>
            <ul className="items-center gap-1 lg:gap-4 text-[5px] lg:text-[1rem] lg:font-light lg:flex hidden">
              <li className="hover:text-GDG-lightblue"><a href="">Home</a></li>
              <li className="hover:text-GDG-lightblue"><a href="">How it works</a></li>
              <li className="hover:text-GDG-lightblue"><a href="">Contact</a></li>

              <li className="bg-GDG-blue hover:bg-GDG-lightblue rounded-md flex justify-center bold items-center w-10 h-4 lg:w-[6.3rem] lg:h-10">
                <a href="">Spin It !</a>
              </li>
              <li>
                <Dark Addclass={"large"} />
              </li>
            </ul>

            <ul className="items-center  gap-1 text-[6px] flex lg:hidden ">
            
              {/* <div className={!isHidden ? 'flex flex-col mobile-menu gap-2 bg-red bold text-2xl dark:text-white absolute top-9 left-0 w-full h-[34%] bg-black  ease  duration-1000 z-20' : 'fixed left-[-100%] ease-in-out'}>
                <li className="p-4 border-b border-gray-600 uppercase ">Home</li>
                <li className="p-4 border-b border-gray-600 uppercase">How it works</li>
                <li className="mr-1 p-4 border-b border-gray-600 uppercase">Contact</li>
              </div> */}
              <div
        className={
          !isHidden
            ? "fixed top-0 left-0 border-r z-20  p-5 border-gray-900 w-[60%] h-full bg-[#000300] ease-in-out duration-1000"
            : "fixed left-[-100%] ease-in-out"
        }
      >
        <img className="w-[23em] flex mb-4 justify-center h-auto top-[5em]" src={logo} alt="" />
        <ul className="uppercase  dark:text-white text-sm ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">How it works</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
              <li className="bg-GDG-blue rounded-sm flex justify-center items-center w-10 h-4">
                Spin It !
              </li>
              <li className="flex">
                <Dark Addclass={"mini"}/>
              </li>
              <div onClick={handleClick} className="block md:hidden ml-2">
                {isHidden ? <AiOutlineMenu size={20} className="text-white dark:text-black" /> : <AiOutlineClose size={20} className="text-white dark:text-black"/>}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
