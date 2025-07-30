import { NavLink } from "react-router-dom";
import jsonData from "../../data/nav.json";

const { nav } = jsonData;

const Navber = () => {
  return (
    <nav className="bg-white shadow-sm border-b sticky px-2 md:px-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className=" text-[12px] text-nowrap md:text-xl font-bold text-blue-600">Amadi Store</div>
          <ul className="flex ">
            {nav.map(({ name, path }) => (
              <li key={name}>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
