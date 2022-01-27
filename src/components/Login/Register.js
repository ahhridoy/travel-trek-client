import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const [loginData, setLoginData] = useState({});
  const {signInWithGoogle, registerUser} = useAuth() 

  let navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
};

const handleSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
        alert("Your password did not match");
        return;
    }
    registerUser(
        loginData.email,
        loginData.password,
        loginData.name,
        navigate
    );
    e.preventDefault();
};

    return (
        <div className="flex items-center justify-center">
            <div className="p-8 w-6/12 text-left">
                <h1 className="text-2xl font-bold py-5">Create An Account</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Enter Your Name
                        </span>
                        <input
                            type="text"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Name"
                            onBlur={handleOnBlur}
                            required
                        />
                    </label>{" "}
                    <br />
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Enter Your Email
                        </span>
                        <input
                            type="email"
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
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Password"
                            onBlur={handleOnBlur}
                            required
                        />
                    </label>{" "}
                    <br />
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Enter Your password Again
                        </span>
                        <input
                            type="password"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Re-Type Password"
                            onBlur={handleOnBlur}
                            required
                        />
                    </label>{" "}
                    <br />
                    <button
                        type="submit"
                        className="font-bold bg-blue-600 px-3 py-2 rounded text-white w-full"
                    >
                        Register
                    </button>{" "}
                    <br /> <br />
                </form>
                <button onClick={signInWithGoogle} className="font-bold bg-red-600 px-3 py-2 rounded text-white w-full">
                    Google Sign In
                </button>{" "}
                <br /> <br />
                <Link to="/login" className="underline underline-offset-2">
                    Already Have An Account?
                </Link>
            </div>
        </div>
    );
};

export default Register;
