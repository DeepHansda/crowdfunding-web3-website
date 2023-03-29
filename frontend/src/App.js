import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "./context";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";

export default function App() {
  const { connectWallet } = useStateContext();
  return (
    <Fragment>
      <button onClick={() => connectWallet()}>connectWallet</button>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createCampaign" element={<CreateCampaign />} />
        </Routes>
      </div>
    </Fragment>
  );
}
