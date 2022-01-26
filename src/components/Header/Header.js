import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center space-x-4 bg-blue-400">
        <Link
          to="/home"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </Link>
        <Link
          to="/blogs"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Blogs
        </Link>
        <Link
          to="/dashboard"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
