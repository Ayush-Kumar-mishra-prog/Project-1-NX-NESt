import Link from "next/link";

const navItems = [
  "Ecommerce applications",
  "SaaS applications",
  "Management applications",
  "Mobile applications",
  "Web applications",

  
];

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 sm:px-6 lg:justify-center lg:px-8">
        {navItems.map((item) => (
          <Link
            key={item}
            href="/projects"
            className="shrink-0 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
