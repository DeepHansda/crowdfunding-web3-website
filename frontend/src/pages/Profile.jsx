import React, { Fragment, useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import Loader from "../components/Loader";
import { useStateContext } from "../context";

function Profile() {
  const { getUserCampaigns, loading, address, contract } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const data = await getUserCampaigns();
    setCampaigns(data);
  };
  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);
  return (
    <Fragment>
      {loading && <Loader />}
      <div className="ml-[200px] mt-7">
        {/* <button onClick={()=>fetchCampaigns()}>click</button> */}
        <div className="w-[1350px] grid grid-cols-4 gap-4">
          {campaigns && campaigns.length > 0 ? (
            <>
              {campaigns.map((campaign, index) => {
                return (
                  <div key={index}>
                    <CampaignCard campaign={campaign} />
                  </div>
                );
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
    </Fragment>
  );
}

export default Profile;
