import React from "react";
import { BiHomeAlt, BiRocket, BiSupport, BiUser } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
const navItems = [
  {
    name: "home",
    link: "/",
    icon: BiHomeAlt(),
  },
  {
    name: "create campaign",
    link: "/createCampaign",
    icon: BiRocket(),
  },
  {
    name: "profile",
    link: "/profile",
    icon: BiUser(),
  },
  {
    name: "contact",
    link: "/contact",
    icon: BiSupport(),
  },
];
function Sidebar() {
  return (
    <div className="h-full w-12 shadow-lg shadow-black absolute bg-[#343a40] z-50">
      <div className="flex items-center flex-col mt-4">
        {navItems.map((item, index) => (
          <div className="group relative flex items-center" key={index}>
            <div className="icon my-4">
              <Link to={item.link}>
                <IconContext.Provider
                  value={{ size: "1.8em", color: "#db00b6" }}
                >
                  {item.icon}
                </IconContext.Provider>
              </Link>
            </div>
            <div className="tooltip border border-black absolute opacity-0 transition-all duration-500 left-10 shadow-sm shadow-black px-5 py-1 rounded-lg">
              <p className="font-[Montserrat] text-[#ffffff61] uppercase text-sm">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
