import {
  Network,
  Server,
  Headphones,
  Wifi,
  Laptop,
  Database,
} from "lucide-react";

export const services = [
  {
    id: 1,
    imgsrc: "/services/services1.jpg",
    slug: "/services/consultancy",
    title: "IT Services",
    description: "Professional enterprise-grade ICT support and implementation services.",
    icon: Laptop,
  },
  {
    id: 2,
    imgsrc: "/server_administration/serveradmin4.jpg",
    slug: "/services/server-admin",
    title: "Server Administration",
    description: "Comprehensive server management and maintenance services.",
    icon: Server,
  },
  {
    id: 3,
    imgsrc: "/services/services3.jpg",
    slug: "/services/software",
    title: "Software Services",
    description: "Custom software development and maintenance services.",
    icon: Database,
  },
  {
    id: 4,
    imgsrc: "/connectivity/connectivity3.jpg",
    slug: "/services/telecom",
    title: "Telecommunication",
    description: "Reliable telecommunication solutions for modern businesses.",
    icon: Headphones,
  },
  {
    id: 5,
    imgsrc: "/networking/networking2.jpg",
    slug: "/services/networking",
    title: "Networking",
    description: "Design and implementation of robust network infrastructures.",
    icon: Network,
  },
  {
    id: 6,
    imgsrc: "/connectivity/connectivity2.jpg",
    slug: "/services/bandwidth",
    title: "Bandwidth & Connectivity",
    description: "High-speed internet and connectivity solutions.",
    icon: Wifi,
  },
];