"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Ticket, Download} from "lucide-react";
//import { Facebook } from @react-icons/fa;
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/20 backdrop-blur-xl border-b border-r-2 border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 pt-2">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image
                    src="/logo_utm.png"
                    alt="UTM Logo"
                    width={160}
                    height={60}
                    className="bg-white rounded-md shadow-md shadow-gray-500/20 p-1"
                />
              </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition duration-300 group"
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500/50 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/contact" alt="Contact Support">
              <button className="flex items-center gap-2 bg-blue-500/50 hover:bg-blue-600 text-white px-5 py-3 rounded-2xl transition shadow-lg shadow-blue-500/20">
                <BiSupport className="w-5 h-5" />
                Contact Support
              </button>
              </Link>

              <button className="flex items-center gap-2 border border-white/10 hover:bg-white/10 text-white px-5 py-3 rounded-2xl transition">
                <FaFacebook />
                Facebook
              </button>
              <button className="flex items-center gap-2 border border-white/10 hover:bg-white/10 text-white px-5 py-3 rounded-2xl transition">
                <FaTwitter />
                Twitter
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          {/* Mobile Links */}
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <button className="flex items-center gap-2 bg-blue-500/50 hover:bg-blue-600 text-white px-5 py-3 rounded-2xl transition shadow-lg shadow-blue-500/20">
                <BiSupport className="w-5 h-5" />
                Support Portal
              </button>

              <button className="flex items-center gap-2 border border-white/10 hover:bg-white/10 text-white px-5 py-3 rounded-2xl transition">
                <FaFacebook />
                Facebook
              </button>
              <button className="flex items-center gap-2 border border-white/10 hover:bg-white/10 text-white px-5 py-3 rounded-2xl transition">
                <FaTwitter />
                Twitter
              </button>
          </div>
        </div>
      </div>
    </header>
  );
}