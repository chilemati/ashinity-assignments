import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";import MobileNav from "./MobileNav";
import jsonData from "../../data/nav.json";
const { nav } = jsonData;

const Navber = () => {
  return (
    <nav className="bg-white shadow-sm border-b sticky px-2 md:px-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className=" text-[18px] text-nowrap md:text-xl font-bold text-blue-600">Amadi Store</div>
          <ul className="flexStart ">
            {nav.map(({ name, path }) => (
              <li className="hidden md:flexStart" key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-1.5 md:px-3 py-2  rounded-md text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`
                  }
                  end={path === "/e-commerce"} // ensures Home only matches exact
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li className="flexCenter w-fit md:hidden group ">
              <FiMenu  className="flex group-hover:hidden text-[25px] font-bold text-black" />
              <MdArrowDropDown className="hidden group-hover:flex text-[55px] group-hover:cursor-not-allowed font-bold text-black"  />
              <div className={`hidden group-hover:flexColStart w-full`} >
                <MobileNav />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
