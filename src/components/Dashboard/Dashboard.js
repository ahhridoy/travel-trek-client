import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { admin, logOut } = useAuth();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 bg-pink-600 h-full py-5">
                <div className="flex flex-col">
                    <Link
                        to="/dashboard"
                        className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                        Manage Blogs
                    </Link>
                    <Link
                        to="/dashboard/postBlogs"
                        className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                        Post Blogs
                    </Link>
                    {admin && (
                        <Link
                            to="/dashboard/makeAdmin"
                            className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                        >
                            Make Admin
                        </Link>
                    )}
                    <button
                            onClick={logOut}
                            className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                        >
                            Logout
                        </button>
                </div>
            </div>
            <div className="col-span-3 bg-white h-full p-9">
                <h1 className="text-pink-600 font-bold text-2xl py-1">
                    This is Admin Dashboard.
                </h1>
                <h1 className="text-black font-bold text-xl">
                    {" "}
                    Admin can Post Blog, Update Blog, Delete Blog & Make Another
                    as an Admin!
                </h1>
                <br /> <br />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
