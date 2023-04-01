import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context";
import CampaignsDetails from "./pages/CampaignsDetails";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <div className="w-full flex flex-col h-screen relative">
        <div className="absolute z-30">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createCampaign" element={<CreateCampaign />} />
              <Route path='/profile' element={<Profile/>}/>
              <Route path="/campaignDetails" element={<CampaignsDetails/>}/>
            </Routes>
          </div>
        </div>

        <div className="w-full absolute flex items-center justify-center h-full ">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-[#db00b6] rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-28 w-72 h-72 bg-pink-600 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
