import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import TextInput from "../components/TextInput";
import { useStateContext } from "../context";
import { calculateBarPercentage, daysLeft } from "../utils";

function CampaignsDetails() {
  const { getDonations, contract, address, fundEth, loading } =
    useStateContext();
  const { state: campaign } = useLocation();
  const remainingDays = daysLeft(campaign.deadline);
  const [fund, setFund] = useState("");
  const [donators, setDonators] = useState([]);

  const fetchDonations = async () => {
    const data = await getDonations(campaign.id);
    setDonators(data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fundEth(fund, campaign.id);
  };
  useEffect(() => {
    if (contract) {
      fetchDonations();
    }
  }, [contract, address]);
  return (
    <Fragment>
      {loading && <Loader />}
      <div className="w-srceen">
        <div className="ml-[200px] mt-7 bg-[#343a40] max-w-[1250px] mx-10 rounded-xl overflow-hidden shadow-xl">
          <div className="flex ">
            <div>
              <img src={campaign.image} alt="image" className="max-w-full" />
            </div>
            <div className="ml-5 px-10 py-5">
              <div className="mb-5">
                <h2 className="bg-[#495057] w-fit py-2 px-5 rounded-md text-[#ffffff61] font-bold">
                  Owner: {campaign.owner}
                </h2>
              </div>
              <div className="">
                <h2 className="bg-[#495057] w-fit py-2 px-5 rounded-md text-[#ffffff61] font-bold">
                  {campaign.title}
                </h2>
              </div>
              <div className="w-[600px] mt-5">
                <p className="bg-[#495057] py-2 px-5 w-fit rounded-md text-[#ffffff61]">
                  {campaign.description}
                </p>
              </div>
            </div>
          </div>
          <div className="full flex items-start justify-between m-10">
            <div className=" w-full">
              <div className=" w-full flex items-start justify-between mr-12">
                <div className="bg-[#495057] py-2 px-5 w-fit rounded-md text-[#ffffff61]">
                  Target: {campaign.target} ETH
                </div>
                <div className="bg-[#495057] py-2 px-5 w-fit rounded-md text-[#ffffff61]">
                  Amount Collected: {campaign.amountCollected} ETH
                </div>
                <div className="bg-[#495057] py-2 px-5 w-fit rounded-md text-[#ffffff61]">
                  {remainingDays} Days Left.
                </div>
              </div>
              <div className="relative w-full h-[5px] bg-[#ffffff61] mt-2">
                <div
                  className="absolute h-full bg-[#db00b6]"
                  style={{
                    width: `${calculateBarPercentage(
                      campaign.target,
                      campaign.amountCollected
                    )}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="bg-[#495057] py-2 px-5 w-[600px] rounded-md ml-10">
              <form onSubmit={submitHandler}>
                <div>
                  <TextInput
                    label="Fund ETH."
                    placeHolder="0.4 ETH"
                    value={fund}
                    required={true}
                    handleChange={(e) => setFund(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className="px-4 py-2 shadow-sm shadow-black hover:shadow-[0_0px_16px_4px_#db00b6] rounded border border-black font-[Montserrat] text-[#db00b6] uppercase mt-6"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="my-5">
            <div className="flex mx-10 rounded-md bg-[#495057]">
              <div className="flex-[2_2_0%]  py-2 px-5 w-fit text-[#ffffff61] border-r">
                Donators
              </div>
              <div className="flex-1 py-2 px-5 w-fit text-[#ffffff61]">
                Donations
              </div>
            </div>

            <div className="px-10">
              {donators?.length ? (
                donators.map((item, index) => (
                  <div className="flex w-full border-b" key={index}>
                    <div className="flex-[2_2_0%] py-2 px-5 text-[#ffffff61] border-r">
                      {item.donator}
                    </div>

                    <div className="flex-1 py-2 px-5 text-[#ffffff61]">
                      {item.donation} ETH
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-[#495057] py-2 px-5 mt-5 w-fit rounded-md text-[#ffffff61]">
                  No Funding Yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CampaignsDetails;
