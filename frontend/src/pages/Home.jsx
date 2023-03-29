import React, { useEffect } from "react";
import { useStateContext } from "../context";

function Home() {
  const { getAllCampaigns,loading } = useStateContext();
//   useEffect(() => {
//     getAllCampaigns();
//   }, []);
console.log(loading)
  return (
    <div>
      <div><button onClick={()=>getAllCampaigns()}>get</button></div>
    </div>
  );
}

export default Home;
