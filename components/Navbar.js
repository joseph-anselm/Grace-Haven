"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5 7.5 7.5-7.5M12 4.5v15"
              />
            </svg>
          </div>
          <span className="font-[Poppins] text-xl font-semibold text-gray-900">
            Grace<span className="text-indigo-600">Haven</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "Devotionals", "Age Groups", "About", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={`text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-lg transition ${
                  item === "Home"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Subscribe Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Subscribe Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-2 py-4 px-6">
            {["Home", "Devotionals", "Age Groups", "About", "Contact"].map(
              (item, idx) => (
                <Link
                  key={idx}
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-lg transition ${
                    item === "Home"
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              )
            )}
            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
