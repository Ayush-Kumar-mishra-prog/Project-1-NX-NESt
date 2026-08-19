"use client";

import { assets } from "@/Assets/assests";
import { getSettingsAssetUrl, useUserContext } from "@/context/UserContext";
import {
  BellIcon,
  EyeIcon,
  HomeIcon,
  IndianRupee,
  LayoutGrid,
  PersonStandingIcon,
  Settings,
  WorkflowIcon,
} from "lucide-react";
import Link from "next/link";

const adminLinks = [
  { href: "/admin/dashboard", label: "Home", Icon: HomeIcon },
  { href: "/admin/seller", label: "Sellers", Icon: PersonStandingIcon },
  { href: "/admin/earnings", label: "Earnings", Icon: IndianRupee },
  { href: "/admin/projects", label: "Projects", Icon: WorkflowIcon },
  { href: "/admin/category", label: "Categories", Icon: LayoutGrid },
  { href: "/admin/notifications", label: "Notifications", Icon: BellIcon },
  { href: "/admin/credentials", label: "Credentials", Icon: EyeIcon },
  { href: "/admin/settings", label: "Settings", Icon: Settings },
];

const AdminChrome = ({ children }) => {
  const { settingsData } = useUserContext();
  const logoSrc = settingsData.logo
    ? getSettingsAssetUrl(settingsData.logo)
    : assets.logo.src;

  return (
    <>
      <div
        className="flex w-full items-center justify-center gap-3 p-5"
        style={{ backgroundColor: settingsData.navColor }}
      >
        <img src={logoSrc} className="h-10 w-auto max-w-full" alt="logo" />
        
      </div>

      <nav
        className="flex w-full flex-wrap items-center justify-center gap-2 px-3 py-2"
        style={{ backgroundColor: settingsData.navbarColor }}
      >
        {adminLinks.map(({ href, label, Icon }) => (
          <Link
            key={`${href}-${label}`}
            href={href}
            className="block rounded-md px-2 py-2 text-sm hover:bg-black/15 sm:px-3 sm:text-base lg:text-xl"
            style={{ color: settingsData.navText }}
          >
            <div className="flex items-center gap-2">
              <Icon size={18} />
              {label}
            </div>
          </Link>
        ))}
      </nav>
      {children}
    </>
  );
};

export default AdminChrome;
