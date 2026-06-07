"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Music2, Ticket, Download, CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react"; 

const featuredEvents = [
  {
    imgSrc: "/hero/consultancy1.png",
    slug: "/services/consultancy",
    title: "Consultancy Services",
    description:
      "Close deals with our expert consultancy services.",
  },
  {
    imgSrc: "/hero/thembani2.png",
    slug: "/services/networking",
    title: "Networking Services",
    description:
      "Expand your professional network with our networking services.",
  },
  {
    imgSrc: "/hero/softwaredevelopment.png",
    slug: "/services/software-development",
    title: "Software Development Services",
    description:
      "Build innovative solutions with our expert development team.",
  },
];


export default function HeroSection() {

  const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? featuredEvents.length - 1 : prev - 1
      );
    };

    const currentEvent = featuredEvents[currentSlide];

    if (!currentEvent) {
      return null;
    }
  
  return (
    <div className="top-0 left-0 w-full h-screen">
    {/* HERO SECTION */}
      <section
        className="min-h-screen flex items-center my-2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/connectivity/connectivity1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 border border-white/10 mb-6 backdrop-blur-sm">
                <Music2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm tracking-wide text-white uppercase">
                  Your ICT Solutions Partner
                </span>
              </div>
            {/*}
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
                Reliable ICT, Infrastructure and Digital Solutions for Modern Organisations
              </h3>
              */}
              <ul className="list-disc list-inside text-lg md:text-3xl text-white mb-8">
                <li className="mb-3">Comprehensive ICT Solutions</li>
                <li className="mb-3">Cutting-Edge Infrastructure</li>
                <li className="mb-3">Tailored Digital Services</li>
                <li className="mb-3">24/7 Support and Maintenance</li>
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link href="/services" alt="View Our Services">
                <button className="flex items-center gap-2 bg-blue-500/50 hover:bg-blue-600 transition px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/30">
                  View Our Services
                </button>
                </Link>

                <button className="flex items-center gap-2 border border-white/20 bg-green-500/30 hover:bg-green-500/50 transition px-6 py-4 rounded-2xl font-semibold backdrop-blur-sm">
                  <Download className="w-5 h-5" />
                  Download App
                </button>
              </div>
            </div>

            {/* FEATURED EVENT CAROUSEL */}
            <div className="relative">
              <div className="bg-white/50 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

                <Link
  href={`${currentEvent.slug}?title=${encodeURIComponent(
    currentEvent.title
  )}`}
>
  <Image
    src={currentEvent.imgSrc}
    alt={currentEvent.title}
    width={600}
    height={360}
    className="w-full h-[360px] object-cover rounded-2xl mb-6"
  />
</Link>

<h1 className="text-3xl font-bold mb-4 text-gray-200">{currentEvent.title}</h1>
<span className="text-shadow-amber-400">{currentEvent.description}</span>
                
                  
                

                {/* Stats */}
                

                {/* Carousel Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {featuredEvents.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all ${
                          currentSlide === index
                            ? "w-10 bg-blue-900"
                            : "w-3 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-blue-900 hover:bg-blue-600 transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       </div>
  );
}