import React, { useState } from "react";
import LogoImg from "../assets/Images/Logo.jpg";
import Signup from "../Componenets/User/Signup";
import { Link } from "react-router-dom";

import {
  FiChevronDown,
  FiArrowRight,
  FiBriefcase,
  FiCpu,
  FiBookOpen,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  // State to track the active top-level menu and the sub-menu
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Enhanced NavbarItems with unique IDs and icons for better rendering and UI.
  const NavbarItems = [
    {
      id: 1,
      name: "Products",
      link: "#",
      icon: <FiBriefcase />,
      submenu: [
        {
          id: 11,
          name: "Online Exam",
          link: "#",
          icon: <FiCpu />,
          demo: [
            { id: 111, name: "Live Proctoring", link: "/subject" },
            { id: 112, name: "Secure Browser", link: "/subject" },
            { id: 113, name: "AI Analytics", link: "/subject" },
            { id: 114, name: "Custom Branding", link: "/subject" },
          ],
        },
        {
          id: 12,
          name: "Offline Exam",
          link: "#",
          icon: <FiBookOpen />,
          demo: [
            { id: 121, name: "OMR Sheet Scanning", link: "/subject" },
            { id: 122, name: "Result Processing", link: "/subject" },
            { id: 123, name: "Offline Analytics", link: "/subject" },
            { id: 124, name: "Question Bank", link: "/subject" },
          ],
        },
        {
          id: 13,
          name: "Test Series",
          link: "#",
          icon: <FiTrendingUp />,
          demo: [
            { id: 131, name: "Mock Tests", link: "/subject" },
            { id: 132, name: "Performance Tracking", link: "/subject" },
            { id: 133, name: "All India Ranking", link: "/subject" },
            { id: 134, name: "Detailed Solutions", link: "/subject" },
          ],
        },
        {
          id: 14,
          name: "Study Material",
          link: "#",
          icon: <FiBookOpen />,
          demo: [
            { id: 141, name: "eBooks & PDFs", link: "/subject" },
            { id: 142, name: "Video Lectures", link: "/subject" },
            { id: 143, name: "Interactive Quizzes", link: "/subject" },
            { id: 144, name: "Notes & Articles", link: "/subject" },
          ],
        },
      ],
    },
    { id: 2, name: "Resources", link: "/resources", icon: <FiUsers /> },
    { id: 3, name: "Our Toppers", link: "/our-toppers", icon: <FiAward /> },
    { id: 4, name: "Pricing", link: "/pricing", icon: <FiDollarSign /> },
  ];

  return (
    <nav className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={LogoImg}
            alt="Logo"
            className="h-10 w-10 rounded-full mr-3"
          />
          <span className="font-bold text-xl tracking-wider  text-white">
            Inolck
          </span>
        </div>
        <ul className="hidden lg:flex items-center space-x-2">
          {NavbarItems.map((item) => (
            <li
              key={item.id}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveMenu(item.id)}
              onMouseLeave={() => item.submenu && setActiveMenu(null)}
            >
              <a
                href={item.link}
                className="flex items-center p-3 rounded-md hover:bg-blue-200/60 transition-colors duration-300"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span className="font-medium">{item.name}</span>
                {item.submenu && (
                  <FiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </a>
              {/* Mega Menu Dropdown */}
              {activeMenu === item.id && item.submenu && (
                <div
                  onMouseLeave={() => setActiveSubMenu(null)}
                  className="absolute left-1/2 -translate-x-1/2 mt-1 origin-top transition-all duration-300 ease-out"
                >
                  <div className="bg-white text-gray-800 rounded-lg shadow-xl flex w-[600px]">
                    {/* Left Panel: Submenu items */}
                    <div className="w-1/3 bg-gray-50 rounded-l-lg p-2">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.id}
                          onMouseEnter={() => setActiveSubMenu(subitem.id)}
                          className={`w-full text-left p-3 rounded-md flex items-center justify-between text-sm font-semibold transition-colors duration-200 ${
                            activeSubMenu === subitem.id
                              ? "bg-indigo-100 text-indigo-600"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          <div className="flex items-center">
                            {subitem.icon && (
                              <span className="mr-2 text-lg">
                                {subitem.icon}
                              </span>
                            )}
                            {subitem.name}
                          </div>
                          <FiArrowRight
                            className={`transition-opacity duration-200 ${
                              activeSubMenu === subitem.id
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {/* Right Panel: Demo items */}
                    <div className="w-2/3 p-6">
                      {item.submenu.map((subitem) => (
                        <div
                          key={subitem.id}
                          className={`${
                            activeSubMenu === subitem.id ? "block" : "hidden"
                          }`}
                        >
                          <h3 className="font-bold text-lg mb-4">
                            {subitem.name} Demos
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {subitem.demo?.map((demoItem) => (
                              <a
                                key={demoItem.id}
                                href={demoItem.link}
                                className="block p-3 rounded-md hover:bg-gray-100 transition-colors text-sm"
                              >
                                {demoItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => setIsSignupOpen(!isSignupOpen)}
            className="font-medium px-4 py-2 rounded-md hover:bg-blue-200/60 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => setIsSignupOpen(!isSignupOpen)}
            className="font-medium px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            Sign Up
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
      {isSignupOpen && <Signup />}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        ></div>

        {/* Sidebar Content */}
        <div
          className={`relative bg-white w-58 max-w-[calc(100%-3rem)] h-full overflow-x-scroll shadow-xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-bold text-lg">Inolck</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
          </div>
          <div className="p-4">
            <ul className="flex flex-col space-y-2 text-gray-800">
              {NavbarItems.map((item) => (
                <li key={`mobile-${item.id}`}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer list-none">
                        <div className="flex items-center">
                          {item.icon && (
                            <span className="mr-2">{item.icon}</span>
                          )}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <FiChevronDown className="ml-1 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <ul className="pl-6 pt-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.id}>
                            <a
                              href={subitem.link}
                              className="flex items-center p-2 rounded-md hover:bg-gray-100 text-sm"
                            >
                              {subitem.icon && (
                                <span className="mr-2">{subitem.icon}</span>
                              )}
                              {subitem.name}
                            </a>
                            <ul className="pl-4 space-y-1">
                              {subitem.demo?.map((demoItem) => (
                                <li key={demoItem.id}>
                                  <a
                                    href={demoItem.link}
                                    className="block p-2 rounded-md hover:bg-gray-100 text-xs"
                                  >
                                    {demoItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a
                      href={item.link}
                      className="flex items-center p-2 rounded-md hover:bg-gray-100"
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      <span className="font-medium">{item.name}</span>
                    </a>
                  )}
                </li>
              ))}
              <li className="border-t border-gray-200 mt-4 pt-4 flex flex-col space-y-3">
                <button 
                onClick={() => {setIsSignupOpen(!isSignupOpen)
                setMobileMenuOpen(false)
                }}
                className="w-full font-medium px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                  Login
                </button>
                <button 
                onClick={() => {setIsSignupOpen(!isSignupOpen)
                 setMobileMenuOpen(false)
                }}
                className="w-full font-medium px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
