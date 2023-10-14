import { Outlet } from "react-router-dom";
import Navbar from "../Components/Sheared/Navbar";

const Root = () => {
  return (
    <div className="font-rancho">
      <Navbar></Navbar>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
