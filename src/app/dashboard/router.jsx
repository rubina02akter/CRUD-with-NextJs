"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaShoppingCart,
  FaCog,
  FaCircle,
  FaHome,
} from "react-icons/fa";

export default function RouterPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar for large screens */}
      <div className="w-64 min-h-screen text-green-950 bg-[#c2b3a3] py-12 hidden lg:block">
        <ul className="menu p-4">
          <li>
            <Link href="/dashboard/profile">
              <FaUser /> My Profile
            </Link>
          </li>
          <li>
            <Link href="/dashboard/add-product">
              <FaShoppingCart /> Add products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <FaCog /> Settings
            </Link>
          </li>
          <div className="divider">
            <FaCircle />
          </div>
          <li>
            <Link href="/">
              <FaHome /> Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown menu for small/medium screens */}
      <div className="lg:hidden  w-full text-green-950 bg-[#c2b3a3] py-4 px-6">
        <button
          className="flex items-center gap-2 text-white"
          onClick={toggleDropdown}
        >
          <FaBars className="text-lg w-full" />
          Menu
        </button>
        {isDropdownOpen && (
          <ul className="menu p-4 text-green-950 bg-[#c2b3a3] ">
            <li>
              <Link href="/dashboard/profile">
                <FaUser /> My Profile
              </Link>
            </li>
            <li>
            <Link href="/dashboard/add-product">
              <FaShoppingCart /> Add products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <FaCog /> Settings
            </Link>
          </li>
            <div className="divider">
              <FaCircle />
            </div>
            <li>
              <Link href="/">
                <FaHome /> Home
              </Link>
            </li>
          </ul>
        )}
      </div>

      
    </div>
  );
}
