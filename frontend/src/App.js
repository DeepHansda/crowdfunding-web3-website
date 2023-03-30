import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";

export default function App() {
  return (
    <Fragment>
      <Navbar/>
      <Sidebar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createCampaign" element={<CreateCampaign />} />
        </Routes>
      </div>
    </Fragment>
  );
}
