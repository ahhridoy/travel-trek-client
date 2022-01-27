import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="flex justify-center space-x-4 bg-blue-600 py-2">
                <Link
                    to="/home"
                    className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >
                    Home
                </Link>
                <Link
                    to="/totalBlogs"
                    className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >
                    Blogs
                </Link>

                {!user?.email ? (
                    <Link
                        to="/login"
                        className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                        Login
                    </Link>
                ) : (
                    <div>
                        <Link
                            to="/dashboard"
                            className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                        >
                            Dashboard
                        </Link>{" "}
                        <button
                            onClick={logOut}
                            className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
                        >
                            LogOut
                        </button>
                        <button
                            className="px-3 py-2 text-black rounded-lg hover:bg-slate-100 hover:text-slate-900"
                        >
                            Logged In: {user.displayName}
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
