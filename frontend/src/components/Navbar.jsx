import React from "react";
import { useStateContext } from "../context";
import searchImg from "../assets/search.svg";
import logo from "../assets/thirdweb.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { connectWallet, address } = useStateContext();
  const navigate = useNavigate();
  return (
    <div className="shadow-lg py-2 bg-[#343a40]">
      <div className="flex items-center justify-between h-12 px-12">
        <div className="w-8 cursor-pointer" onClick={()=>navigate('/')}>
          <img src={logo} alt="logo" className="max-w-full" />
        </div>
        <div className="flex items-center">
          <div className="flex mr-10 items-center">
            <input
              className="py-[10px] px-[20px] shadow-sm shadow-black rounded-full hover:shadow-[0_0px_16px_4px_#db00b6] focus:shadow-[0_0px_16px_4px_#db00b6] border border-black mr-4 text-white outline-none bg-transparent font-[Montserrat] text-xs"
              placeholder="Search Campaigns...."
            />
            <div className="rounded-full shadow-sm shadow-black border border-[#db00b6] p-[5px] cursor-pointer">
              <img src={searchImg} alt="search" />
            </div>
          </div>

          <div>
            <button
              className="px-4 py-2 shadow-sm shadow-black hover:shadow-[0_0px_16px_4px_#db00b6] rounded border border-black font-[Montserrat] text-[#db00b6] uppercase"
              onClick={() => {
                address ? navigate("/createCampaign") : connectWallet();
              }}
            >
              {address ? "create campaign" : "connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
