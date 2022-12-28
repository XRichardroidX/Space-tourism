import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  // const [listClicked, setListClicked] = useState(false)
  const [toggle, setToggle] = useState(false)
  const togglebtn = () => {
    setToggle(!toggle)
  }
  // const handleClick = (e) => {
  //   e.currentTarget.borderBottom = 'none'
  //   setListClicked(true)
  // }
  return (
    <nav className="max-w-[1480px] w-full mx-auto fixed md:top-10 right-0 h-24 pl-3 flex justify-between items-center gap-2 z-[3000]">
      <div>
        <img
          src="../../src/assets/shared/logo.svg"
          alt="logo image"
          className="min-w-[48px]"
        />
      </div>
      <div className="md:h-[1px] bg-slate w-full max-w-[473px] relative md:right-[-80px] z-[1000] "></div>
      <menu
        className={
          toggle
            ? "max-w-[830px] md:pl-28 px-10 max-[550px]:py-[30%] w-full max-[550px]:fixed max-[550px]:top-0 max-[550px]:right-0 max-[550px]:bottom-0 z-50 max-[550px]:left-[30%] animate__animated animate__fadeInRight"
            : "max-w-[830px] md:pl-28 px-10 max-[550px]:py-[30%] w-full max-[550px]:fixed max-[550px]:top-0 max-[550px]:right-0 max-[550px]:bottom-0 z-50 max-[550px]:left-[30%] max-[550px]:hidden"
        }
      >
        <ul
          className={
            "flex justify-between items-center h-24 max-[550px]:flex-col max-[550px]:items-start max-[550px]:h-60"
          }
        >
          <li className="md:ml-[-40px] font-barlow">
            <NavLink
              to="/"
              // style={{ borderBottom: "4px solid white" }} onClick={handleClick}
              className="navlink"
            >
              <span className="text-slate">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className="navlink">
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="navlink">
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className="navlink">
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </menu>
      {/* <img
        src={
          !toggle
            ? "../../src/assets/shared/icon-hamburger.svg"
            : "../../src/assets/shared/icon-close.svg"
        }
        className="absolute top-8 right-3 z-[2000] min-[550px]:hidden cursor-pointer"
        onClick={togglebtn}
      /> */}
      <div
        className={
          !toggle
            ? "min-[550px]:hidden center z-[2000] cursor-pointer origin-[-50%_-50%] absolute top-[20px] right-[25px] w-[35px] before:block before:rounded-[3px] before:my-[7px] before:mx-0 before:transition before:duration-[0.5s] before:h-[6px] before:bg-white after:block after:rounded-[3px] after:my-[7px] after:mx-0 after:transition after:duration-[0.5s] after:h-[6px] after:bg-white"
            : "min-[550px]:hidden center z-[2000] cursor-pointer origin-[-50%_-50%] absolute top-[25px] right-[25px] w-[35px] before:block before:rounded-[3px] before:my-[7px] before:mx-0 before:transition before:duration-[0.5s] before:h-[6px] before:bg-white after:block after:rounded-[3px] after:my-[7px] after:mx-0 after:transition after:duration-[0.5s] after:h-[6px] after:bg-white after:-translate-y-3 after:-rotate-[135deg] before:translate-y-3 before:rotate-[135deg]"
        }
        onClick={togglebtn}
      >
        <div
          className={
            !toggle
              ? "block rounded-[3px] my-[7px] mx-0 transition duration-[0.5s] h-[6px] bg-white"
              : "block rounded-[3px] my-[7px] mx-0 transition duration-[0.5s] h-[6px] bg-white scale-0"
          }
        ></div>
      </div>
    </nav>
  );
}
export default Navbar