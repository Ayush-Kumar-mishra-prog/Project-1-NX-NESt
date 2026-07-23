import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { assets } from "../Assets/assests";

const links = [
  {
    name: "Home",
    href: "/",
    id: 1,
  },
  {
    name: "Ecommerce Applications",
    href: "/projects",
    id: 2,
  },
  {
    name: "SaaS Applications",
    href: "/projects",
    id: 3,
  },
  {
    name: "Mobile Applications",
    href: "/projects",
    id: 4,
  },
  {
    name: "Website templates",
    href: "/projects",
    id: 5,
  },
];

const Home = () => {
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

      <nav className="flex w-full flex-wrap items-center justify-center gap-2 bg-blue-900 px-3 py-2">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl"
          >
            {link.name}
          </Link>
        ))}
        <Link
          className="m-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 sm:text-base lg:text-xl"
          href="/authentication"
        >
          Login
        </Link>
      </nav>

      <ProjectCard />
    </>
  );
};

export default Home;
