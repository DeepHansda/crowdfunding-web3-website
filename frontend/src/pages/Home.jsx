import React, { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import { useStateContext } from "../context";

function Home() {
  const { getAllCampaigns, loading, address, contract } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);


  const fetchCampaigns = async() =>{
    const data = await getAllCampaigns()
    setCampaigns(data)

    console.log(await getAllCampaigns())
  }
  useEffect(() => {
    if (contract) {
      fetchCampaigns()
    }
  }, [address,contract]);
  console.log(loading);
  return (
    <div className="ml-[200px] mt-7">
      {/* <button onClick={()=>fetchCampaigns()}>click</button> */}
      <div className="w-[1350px] grid grid-cols-4 gap-4">
        {campaigns && campaigns.length > 0 ? (
          <>
            {campaigns.map((campaign, index) =>{
              console.log(campaign)
              return(
                <div key={index}>
                  <CampaignCard campaign={campaign} />
                </div>)
            })}
          </>
        ) : (
          <>
          <div className="bg-[#343a40] rounded-full py-2 px-5 w-fit font-[Montserrat] text-[#ffffff61]">

            <p>No Campaigns Found.</p>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
