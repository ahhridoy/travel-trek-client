import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
    const { signInWithGoogle, loginUser } = useAuth();

    const location = useLocation();
    let navigate = useNavigate();

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
      loginUser(loginData.email, loginData.password, location, navigate);
      e.preventDefault();
  };

    return (
        <div className="flex items-center justify-center">
            <div className="p-8 w-6/12 text-left">
                <h1 className="text-2xl font-bold py-5">Login Your Account</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Enter Your Email
                        </span>
                        <input
                            type="email"
                            onBlur=""
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Email"
                            onBlur={handleOnBlur}
                            required
                        />
                    </label>{" "}
                    <br />
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Enter Your Password
                        </span>
                        <input
                            type="password"
                            onBlur=""
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Password"
                            onBlur={handleOnBlur}
                            required
                        />
                    </label>{" "}
                    <br />
                    <button
                        type="submit"
                        className="font-bold bg-blue-600 px-3 py-2 rounded text-white w-full"
                    >
                        Login
                    </button>{" "}
                    <br /> <br />
                </form>
                <button
                    onClick={signInWithGoogle}
                    className="font-bold bg-red-600 px-3 py-2 rounded text-white w-full"
                >
                    Google Sign In
                </button>{" "}
                <br /> <br />
                <Link to="/register" className="underline underline-offset-2">
                    New User?
                </Link>
            </div>
        </div>
    );
};

export default Login;
