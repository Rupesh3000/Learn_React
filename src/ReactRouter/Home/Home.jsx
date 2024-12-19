import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/" className="hover:text-gray-300">
                        MyBrand
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-700">
                    <nav className="flex flex-col gap-4 p-4">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-gray-300 font-semibold" : "hover:text-gray-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
