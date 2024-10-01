import { useDispatch } from "react-redux";
import { RiLogoutBoxLine } from "react-icons/ri";

const Navbar = () => {
  const dispatch = useDispatch();
  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };
  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };
  return (
    <div className="h-20 bg-indigo-600 flex items-center justify-between p-5 ">
      <div className="text-white font-bold text-2xl cursor-pointer">
        SHARE POST
      </div>
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search"
          className="p-2 outline-none rounded-md"
        />
        <div
          onClick={openModal}
          className="w-36 border border-indigo-800 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800"
        >
          Create Post
        </div>
        <RiLogoutBoxLine
          size={25}
          className="text-white cursor-pointer"
          onClick={logoutFunc}
        />
      </div>
    </div>
  );
};

export default Navbar;
