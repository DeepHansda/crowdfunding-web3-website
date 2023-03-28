import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "./context";
import CreateCampaign from "./pages/CreateCampaign";


export default function Home() {
  const {connectWallet} = useStateContext()
  return (
   <Fragment>
    <button onClick={()=>connectWallet()}>connectWallet</button>
      <div>
        <Routes>
          <Route path="/" element={<CreateCampaign/>}/>
        </Routes>
      </div>
   </Fragment>
  );
}
