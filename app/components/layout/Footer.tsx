"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import {
  Music2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";


const menuLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "",
    icon: <FaInstagram />,
  },
  {
    name: "Twitter",
    href: "",
    icon: <FaTwitter />,
  },
  
];

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-4 gap-14">
          {/* LOGO + DESCRIPTION */}
          <div className="lg:col-span-1">

            <p className="text-gray-400 leading-relaxed mb-6">
              UTM Projects (Pty) Ltd is a leading ICT solutions provider in
            </p>

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-4 h-4 text-orange-400" />

              <span className="text-sm text-gray-300">
                Your Trusted ICT Solutions Partner
              </span>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />

                <div>
                  <p className="text-white font-medium">
                    Gaborone Office
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Plot 5301, Village
                    <br />
                    Gaborone, Botswana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />

                <div>
                  <p className="text-white font-medium">
                    Phone
                  </p>

                  <p className="text-gray-400 text-sm">
                    +267 71 546 336
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-orange-400 mt-1" />

                <div>
                  <p className="text-white font-medium">
                    Email
                  </p>

                  <p className="text-gray-400 text-sm">
                    support@utmprojects.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Follow Us
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Stay updated with the latest news, company updates,
              exclusive offers, and success stories.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                  >
                    
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 my-10"></div>

        {/* BOTTOM SECTION */}
        
        {/*
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-orange-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="terms-and-conditions"
              className="text-gray-500 hover:text-orange-400 transition"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition"
            >
              Support
            </a>
          </div>
          
        </div>
        */}

      <div className="container mx-auto text-center">
       <h3 className="text-sm font-semibold text-gray-400">
         © {new Date().getFullYear()} UTM Projects (Pty) Ltd.
         All Rights Reserved.
       </h3>
      </div>
      </div>
      
    </footer>
  );
}