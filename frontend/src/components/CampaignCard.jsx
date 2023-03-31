import React from "react";
import { daysLeft } from "../utils";

function CampaignCard({ campaign }) {
  const remainingDays = daysLeft(campaign.deadline);

  return (
    <div className="bg-[#343a40] w-fit shadow-md rounded-lg shadow-black transition-ease duration-200 hover:shadow-[0_0px_16px_4px_#db00b6]">
      <div className="overflow-hidden rounded-lg">
        <img src={campaign.image} alt="image" className="max-w-full" />
      </div>
      <div className="w-fit bg-[#495057] rounded-full py-1 px-2 font-[Montserrat] capitalize shadow-sm shadow-black text-[#ffffff61] mt-4 ml-2">
        <h4>{campaign.title}</h4>
      </div>
      <div className="p-4 mt-2">
        <div className="text-[#ffffff61] capitalize w-fit">
          <p>{campaign.description}</p>
        </div>
        <div className="flex justify-between mt-3 mb-2">
          <div className="w-fit bg-[#db00b6] py-1 px-2 capitalize rounded-full font-[Montserrat] text-[#fff] text-sm">
            <p>target:{campaign.target} ETH</p>
          </div>
          <div className="w-fit bg-[#db00b6] py-1 px-2 capitalize rounded-full font-[Montserrat] text-[#fff] text-sm">
            <p>collected:{campaign.amountCollected} ETH</p>
          </div>
        </div>
        <div className="font-[Montserrat] text-[#ffffff61] font-bold">
          <p>{remainingDays} Days Left.</p>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
