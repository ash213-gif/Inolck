import React from "react";
import LogoImg from "../assets/Images/Logo.jpg"; // Adjust path if necessary
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={LogoImg} alt="Logo" className="h-10 w-10 rounded-full mr-3" />
              <span className="font-bold text-xl tracking-wider text-white">Inolck</span>
            </div>
            <p className="text-sm">
              Empowering the next generation of legal professionals with top-tier exam preparation tools.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Online Exam</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offline Exam</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Test Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Study Material</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/our-toppers" className="hover:text-white transition-colors">Our Toppers</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase mb-4">Stay Updated</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Email for newsletter" />
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Inolck. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
