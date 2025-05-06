'use client'
import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FcMultipleDevices } from "react-icons/fc";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const links = (
    <>
      <li key="home">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-gray-300 text-white"
        >
          <FiHome /> Home
        </Link>
      </li>
      <li key="products">
        <Link
          href="/all-products"
          className="flex items-center gap-2 hover:text-gray-300 text-white"
        >
          All products
        </Link>
      </li>
      <li key="contact">
        <Link
          href="/contact"
          className="flex items-center gap-2 hover:text-gray-300 text-white"
        >
          Contact
        </Link>
      </li>
      <li key="dashboard">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 hover:text-gray-300 text-white"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <nav className="text-white fixed w-full z-50 bg-opacity-40 bg-[#122823]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold flex items-center">
          <FcMultipleDevices className="text-blue-900 text-3xl mr-1" />
          <p>
            Digi-Tech
          </p>
        </div>

        <ul className="hidden lg:flex gap-8">{links}</ul>

        <div className="flex gap-2 items-center">
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"></div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box md:w-52 w-32 text-xs">
              <li className="text-center font-extrabold underline"></li>
              <li className="mt-2">
                <button className="bg-white text-blue-900 block text-center">
                  Logout
                </button>
              </li>
              <li className="mt-2">
                <button className="bg-white text-blue-900 block text-center">
                  <Link href="/dashboard">Dashboard</Link>
                </button>
              </li>
            </ul>
          </div>

          <Link className="btn btn-outline mr-2" href="/login">
            Join Us
          </Link>

          <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-1/2 md:w-1/2 bg-black bg-opacity-45 backdrop-blur-md text-white shadow-lg z-50 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-bold"></span>
              <button onClick={toggleMenu} className="text-white">
                <FiX size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 p-6">
              {links}
              <li>
                <button className="flex items-center gap-2">
                  <FiLogOut /> Logout
                </button>
              </li>
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-2 hover:text-gray-300 text-white"
                >
                  <FiLogOut /> Join Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
