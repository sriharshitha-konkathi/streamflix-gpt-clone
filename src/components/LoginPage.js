import React, { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [mode, setMode] = useState("signIn");

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    );

    setErrorMessage(message);

    if (message) return;

    if (mode === "signUp") {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const {
            uid,
            email: userEmail,
            displayName,
            photoURL,
          } = userCredential.user;
          dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));

          email.current.value = "";
          password.current.value = "";

          navigate("/browse");
        })
        .catch((error) => setErrorMessage(error.message));
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const {
            uid,
            email: userEmail,
            displayName,
            photoURL,
          } = userCredential.user;
          dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));

          email.current.value = "";
          password.current.value = "";

          navigate("/browse");
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')",
      }}
      className=" relative min-h-screen bg-cover bg-center"
    >
      <h1 className="text-red-600 text-4xl font-extrabold tracking-widest cursor-default bg-black bg-opacity-30">
        STREAMFLIX
      </h1>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-30">
        <div className="bg-black bg-opacity-80 p-12 w-96 rounded-lg text-white">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <h1 className="text-3xl font-bold mb-2">
              {mode === "signIn" ? "Sign In" : "Sign Up"}
            </h1>
            <div className="flex flex-col gap-1">
              <label className="text-md text-gray-400">Email</label>
              <input
                type="text"
                ref={email}
                placeholder="Enter your email or phone number"
                className="bg-gray-700 text-white p-4 w-full rounded-md outline-none"
              />
            </div>
            <div>
              <label className="text-md text-gray-400">Password</label>
              <input
                type="password"
                ref={password}
                placeholder="Enter your password"
                className="bg-gray-700 text-white p-4 w-full rounded-md outline-none"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              onClick={handleButtonClick}
              className="bg-red-600 hover:bg-red-700 text-white py-3  rounded-md font-semibold"
            >
              {mode === "signIn" ? "Sign In" : "Sign Up"}
            </button>

            <button
              onClick={(e) => setMode(mode === "signIn" ? "signUp" : "signIn")}
              className="text-sm text-gray-400 hover:text-white mt-2"
            >
              {mode === "signIn"
                ? "New User? Sign Up"
                : "Already have account? Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
