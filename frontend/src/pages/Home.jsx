import React, { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import { useStateContext } from "../context";

function Home() {
  const { getAllCampaigns, loading, address, contract } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);


  const fetchCampaigns = async() =>{
    
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
      <button onClick={()=>fetchCampaigns()}>click</button>
      <div>
        {campaigns ? (
          <>
            {campaigns.map((campaign, index) => (
              <div key={index}>
                <CampaignCard campaign={campaign} />
              </div>
            ))}
          </>
        ) : (
          <>
            <p>No Campaigns Found.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
