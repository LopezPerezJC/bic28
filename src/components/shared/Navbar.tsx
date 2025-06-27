import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/constants";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import LogoBIC28 from '/assets/logobic28.png';
import LogoCSEIIO from '/assets/logoCSEIIO.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function checkButton() {
    setIsOpen(!isOpen);
  }

  return <header className=" text-black py-4 px-1 flex justify-around md:flex-flex-col md:justify-between md:flex-col border-b   w-full  md:max-w-[1280px] m-auto">

    <p className="text-black text-2xl text-bolder hidden md:inline m-auto">Bachillerato Integral Comunitario N° 28 Santos Reyes Pápalo</p>
    <div className="flex flex-row">
      <div className='md:hidden bg-white rounded-full mx-2' >
        <img src={LogoBIC28} alt="" className="w-30 md:h-20" />
      </div>
      <p className="text-black text-2xl font-bold md:hidden m-auto">BIC 28 Santos Reyes Pápalo</p>
    </div>

    <div className="flex items-center justify-between">
      <img src={LogoCSEIIO} alt="" className='hidden md:flex h-20 mx-2' />

      <nav className={`text-gray-500 space-x-0 md:flex bg-gray-100/25 bg-opacity-25 transition-all duration-300 ease-in-out transform ${isOpen ? "bg-white fixed inset-0 w-full flex z-[9000] align-center justify-center flex-col" : "hidden"}`}>
        {
          navbarLinks.map(link => (
            <NavLink
              to={link.href}
              key={link.id}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${isActive ? 'text-black underline' : ''} transition-all duration-300 font-medium hover:text-gray-800 hover:underline p-4 hover:border-b-2 border-black text-center`}
            >
              {link.title}
            </NavLink>
          ))
        }
      </nav>
      <div className='hidden md:flex h-20 bg-white rounded-full mx-2' >
        <img src={LogoBIC28} alt="" />
      </div>

      <button className="md:hidden block z-[9999]" onClick={() => checkButton()}>
        {isOpen ? <MdClose size={45} className="fixed top-4 right-4" /> : <FaBarsStaggered size={35} className="m-2" />}
      </button>
    </div>
  </header>
}