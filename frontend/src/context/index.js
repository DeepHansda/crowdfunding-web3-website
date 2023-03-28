import { useAddress, useContract, useContractWrite, useMetamask, useWalletConnect } from "@thirdweb-dev/react";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export default function StateContextProvider({ children }) {
//   const [loading, setLoading] = useState(false);
const { contract } = useContract(
  "0x5D2c59D7f623350C0e8C8812E117e60D744f4477"
);
  const { mutateAsync: createCampaign, isLoading } = useContractWrite(
    contract,
    "createCampaign"
  );
  const connectWallet = useMetamask()
  const address = useAddress()

  const loading = isLoading 
  console.log(address)
  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        form.deadline,
        form.image,
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <StateContext.Provider value={{ loading, publishCampaign,connectWallet }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
