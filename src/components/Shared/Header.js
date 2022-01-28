import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="font-bold text-2xl text-white">
                                    Travel Trek!
                                </h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
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
                                        <div className="flex flex-row">
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
                                                Logout
                                            </button>
                                            <small className="px-3 py-2 text-white rounded-lg">
                                                Logged in: {user.displayName}
                                            </small>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <div className="flex flex-col">
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
                                        <div className="flex flex-col">
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
                                                Logout
                                            </button>
                                            <small className="px-3 py-2 text-white rounded-lg">
                                                Logged in: {user.displayName}
                                            </small>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;
