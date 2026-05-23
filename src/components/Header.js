import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="absolute w-screen flex justify-between items-center px-8 py-6 z-10 text-white bg-black">
      <div className="flex  items-center gap-8">
        <h1 className="text-red-600 text-4xl font-extrabold tracking-widest cursor-default">
          STREAMFLIX
        </h1>
        <nav className="flex gap-8 text-m font-semibold">
          <button className="hover:text-gray-400">Home</button>
          <button className="hover:text-gray-400">TV Shows</button>
          <button className="hover:text-gray-400">Movies</button>
          <button className="hover:text-gray-400">New & Popular</button>
          <button className="hover:text-gray-400">My List</button>
        </nav>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/gpt")}
            className="px-4 py-2 bg-purple-800 hover:bg-purple-900 text-white rounded-lg font-bold"
          >
            GPT Search
          </button>
          <p className="text-white font-medium opacity-80">{user.email}</p>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
