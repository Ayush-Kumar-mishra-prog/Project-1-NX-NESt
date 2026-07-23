import type { Metadata } from "next";
import "../../globals.css";
import {  Saira } from 'next/font/google'
import {ReplyProvider} from "@/context/ReplyCommentContext"
import Image from "next/image";
import { assets } from "@/Assets/assests";
import { BellIcon, EyeIcon, HomeIcon, IndianRupee, PersonStandingIcon, Settings, Settings2Icon, Toolbox, WorkflowIcon } from "lucide-react";
import Link from "next/link";


export const metadata: Metadata = {
  title: "A1Code Admin",
  description: "Best place of finding the best projects",
};

const outfit = Saira({
  subsets:["latin"],
  variable:"--font-saira"
})


export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                      <Link href="/admin/dashboard" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <HomeIcon size={18} />
                        Home
                         </div>
                      </Link>
                      <Link href="/admin/seller" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <PersonStandingIcon size={18} />
                        Sellers
                         </div>
                      </Link>
                      <Link href="/admin/earnings" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <IndianRupee size={18} />
                        Earnings
                         </div>
                      </Link>
                      <Link href="/admin/projects" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <WorkflowIcon size={18} />
                        Projects
                         </div>
                      </Link>
                      <Link href="/admin/notifications" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <BellIcon size={18} />
                        Notifications
                         </div>
                      </Link>
                      <Link href="/admin/credentials" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <EyeIcon size={18} />
                        Creditionals
                         </div>
                      </Link>
                      <Link href="/admin/settings" className="block rounded-md px-2 py-2 text-sm text-white hover:bg-blue-800 sm:px-3 sm:text-base lg:text-xl">
                        <div className="flex items-center gap-2">
                        <Settings size={18} />
                        Settings
                         </div>
                      </Link>
                       
                      
                    </nav>
        <ReplyProvider>
        {children}
        </ReplyProvider>
        </>
  );
}
