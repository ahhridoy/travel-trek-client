import React from "react";
import { Link, Outlet } from "react-router-dom";
// import ShowBlogs from './ShowBlogs/ShowBlogs';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 bg-pink-600 h-full">
                <div className="flex flex-col">
                <Link to="/dashboard/showBlogs" className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Manage Blogs</Link>
                <Link to="/dashboard/postBlogs" className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Post Blogs</Link>
                <Link to="/dashboard/makeAdmin" className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Make Admin</Link>
                </div>
            </div>
            <div className="col-span-3 bg-white h-full p-9">
              <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
