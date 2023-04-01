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
    "0x79E0B0de32A562E5eA98202C2cCC6EE5B69a115c"
  );
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(
    contract,
    "createCampaign"
  );

  // const {data:allCampaigns,isLoading:allCampaignsLoading,error:campaignsError} = useContractWrite(contract,"getCampaigns")
  const connectWallet = useMetamask();
  const address = useAddress();

  const loading = isLoading || contractLoading;
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
          return parsedData;
        }
      })
      .catch((err) => {
        setContractLoading(false);
        console.log(err);
      });
  };

  const getUserCampaigns = async () => {
    setContractLoading(true);
    return await contract
      .call("getCampaigns")
      .then((data) => {
        if (data?.length > 0) {
          const filteredData = data.filter((cam) => cam.owner == address);
          const parsedData = filteredData?.map((campaign, index) => ({
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
          return parsedData;
        }
      })
      .catch((err) => {
        console.log(err);
        setContractLoading(false);
      });
  };

  const getDonations = async (id) => {
    setContractLoading(true);
    return await contract
      .call("getDonators", id)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setContractLoading(false);
      });
  };

  const fundEth = async (amount, id) => {
    setContractLoading(true);
    return await contract
      .call("donateToCampaign", id, { value: ethers.utils.parseEther(amount) })
      .then((data) => {
        console.log(data);
        setContractLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setContractLoading(false);
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
        getUserCampaigns,
        getDonations,
        fundEth,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
