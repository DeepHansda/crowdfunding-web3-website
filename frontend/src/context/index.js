import {
  useAddress,
  useContract,
  useContractWrite,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export default function StateContextProvider({ children }) {
  const [contractLoading, setContractLoading] = useState(false);
  const { contract } = useContract(
    "0x5D2c59D7f623350C0e8C8812E117e60D744f4477"
  );
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(
    contract,
    "createCampaign"
  );

  // const {data:allCampaigns,isLoading:allCampaignsLoading,error:campaignsError} = useContractWrite(contract,"getCampaigns")
  const connectWallet = useMetamask();
  const address = useAddress();

  const loading = isLoading || contractLoading;
  console.log(address);
  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const getAllCampaigns = async () => {
    setContractLoading(true);
    return await contract
      .call("getCampaigns")
      .then((data) => {
        if (data?.length > 0) {
          const parsedData = data?.map((campaign, index) => ({
            id: index,
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            deadline: campaign.deadline.toNumber(),
            target: ethers.utils.formatEther(campaign.target.toString()),
            amountCollected: ethers.utils.formatEther(
              campaign.amountCollected.toString()
            ),
            image: campaign.image,
          }));
          setContractLoading(false);
          console.log(parsedData);
          return parsedData;
        }
      })
      .catch((err) => {
        setContractLoading(false);
        console.log(err);
      });
  };
  return (
    <StateContext.Provider
      value={{
        loading,
        publishCampaign,
        connectWallet,
        getAllCampaigns,
        address,
        contract,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
