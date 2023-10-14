import { Link } from "react-router-dom";
import logo from "../../assets/coffee-logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#372727] p-4 flex justify-center items-center gap-80">
        <img className="w-10" src={logo} alt="" />
        <h4 className="text-3xl font-bold">Espresso Emporium</h4>

        <div className="flex justify-center items-center gap-8 text-lg font-bold">
          <Link className="underline rounded-xl hover:text-white" to={"/"}>
            Home
          </Link>
          <Link className="underline rounded-xl hover:text-white" to={"/add"}>
            Add coffee
          </Link>
          <Link
            className="underline rounded-xl hover:text-white"
            to={"/update"}
          >
            Update coffee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
