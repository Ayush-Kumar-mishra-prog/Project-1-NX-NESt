"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { assets } from "../Assets/assests";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", type: "link", id: 1 },
  {
    name: "Ecommerce Applications",
    category: "Ecommerce",
    type: "category",
    id: 2,
  },
  { name: "SaaS Applications", category: "SaaS", type: "category", id: 3 },
  { name: "Mobile Applications", category: "Mobile", type: "category", id: 4 },
  { name: "Website templates", category: "Web", type: "category", id: 5 },
  { name: "A1 Premium", href: "/projects", type: "link", id: 6 },
];

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <div className="flex w-full items-center justify-center bg-blue-500 p-5">
        <h1 className="text-2xl text-white">
          <Image
            src={assets.logo}
            className="h-10 w-auto max-w-full"
            alt="logo"
          />
        </h1>
      </div>

      <nav className="flex w-full flex-wrap items-center justify-between gap-2 bg-linear-to-l from-blue-900 to-purple-900 px-3 py-2">
        <button onClick={() => setSidebar(!sidebar)} className="md:hidden">
          {sidebar ? (
            <XIcon size={28} />
          ) : (
            <MenuIcon size={28} className="text-white cursor-pointer" />
          )}
        </button>

        {navItems.map((item) =>
          item.type === "link" ? (
            <Link
              key={item.id}
              href={item.href}
              className="hidden md:block rounded-md px-2 py-2 text-lg text-white hover:bg-blue-800 sm:px-3 sm:text-lg lg:text-lg"
            >
              {item.name}
            </Link>
          ) : (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveCategory(item.category)}
              className={`hidden md:inline-flex rounded-md px-2 py-2 text-lg sm:px-3 sm:text-lg lg:text-lg ${
                activeCategory === item.category
                  ? "bg-white/20 text-white"
                  : "text-white hover:bg-blue-800"
              }`}
            >
              {item.name}
            </button>
          ),
        )}
        <div
          className={`fixed top-0 left-0 h-screen  z-50 w-4/5 gap-2 bg-linear-to-r from-blue-400 to-purple-800 px-3 py-2 transform transition-transform duration-300 md:hidden ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setSidebar(false)} className="">
              <XIcon
                size={28}
                className="text-white border rounded-md border-gray-300"
              />
            </button>
          </div>

          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.id}
                href={item.href}
                className="block md:hidden rounded-md px-2 py-2 text-2xl text-white hover:bg-blue-800 sm:px-3 sm:text-2xl lg:text-2xl"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCategory(item.category);
                  setSidebar(false);
                }}
                className={`block w-full rounded-md px-2 py-2 text-left text-2xl text-white hover:bg-blue-800 sm:px-3 sm:text-2xl lg:text-2xl ${
                  activeCategory === item.category ? "bg-white/20" : ""
                }`}
              >
                {item.name}
              </button>
            ),
          )}
        </div>
        {sidebar && (
          <div
            onClick={() => setSidebar(false)}
            className="fixed inset-0 bg-black/50 md:hidden"
          />
        )}
        <Link
          className="m-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 sm:text-base lg:text-xl"
          href="/authentication"
        >
          Login
        </Link>
        <Link
          className="m-1 rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white sm:text-base lg:text-xl"
          href="/createSeller"
        >
          Become Seller
        </Link>
      </nav>

      <ProjectCard activeCategory={activeCategory} />
    </>
  );
};

export default Home;
