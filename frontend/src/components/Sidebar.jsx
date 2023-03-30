import React from "react";
import { BiHomeAlt, BiRocket, BiSupport, BiUser } from "react-icons/bi";
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
    <div className="h-screen w-12 shadow-2xl shadow-black">
      <div className="flex items-center flex-col">
        {navItems.map((item,index) => (
          <div className="group" key={index}>
            <div className="w-5">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
