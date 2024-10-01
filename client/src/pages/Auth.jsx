import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../redux/actions/auth";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };
  console.log("autData", authData);
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center ">
      <div className="w-1/2 bg-white p-3">
        <h1 className="text-2xl text-indigo-700 font-bold">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && (
            <input
              type="text"
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              placeholder="Username"
              className="input-style"
            />
          )}
          <input
            type="text"
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            placeholder="Email"
            className="input-style"
          />
          <input
            type="text"
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            placeholder="Password"
            className="input-style"
          />
        </div>
        <div className="text-red-500 text-xs cursor-pointer mb-4">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Have you logged in before?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>Click for Sign Up</span>
          )}
        </div>
        <div
          onClick={authFunc}
          className="w-full p-2 text-center bg-indigo-600 text-white rounded cursor-pointer hover:bg-indigo-800"
        >
          {signUp ? "Sign Up" : "Sign In"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
