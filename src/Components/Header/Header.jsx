import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function Header({ cartCount }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-gray-800">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 flex items-center justify-between max-w-screen-xl mx-auto">
                
                {/* Logo */}
                <Link to="/" className="flex items-center text-white text-2xl font-bold">
                    <img 
                        src="https://img.freepik.com/free-vector/supermarket-logo-design-with-green-cart_23-2148464170.jpg"
                        alt="Logo" 
                        className="w-10 h-10 mr-2"
                    />
                    Supermarket
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8">
                    {["Home", "About", "Contact", "Product"].map((item) => (
                        <NavLink
                            key={item}
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg duration-200 ${
                                    isActive ? "text-orange-400" : "text-gray-200 hover:text-orange-400"
                                }`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <Link
                        to="/login"
                        className="text-gray-200 hover:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                        Sign in
                    </Link>

                    {/* Cart Icon with Dynamic Count */}
                    <NavLink to="/mycart" className="relative text-gray-200 hover:text-orange-400">
                        <FaShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </NavLink>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-white"
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-gray-900 py-2">
                    <div className="flex flex-col space-y-2">
                        {["Home", "About", "Contact", "Product"].map((item) => (
                            <NavLink
                                key={item}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="block py-2 px-4 text-white hover:bg-gray-700"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
