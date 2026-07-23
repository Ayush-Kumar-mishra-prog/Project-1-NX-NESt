import type { Metadata } from "next";
import "./globals.css";
import {  Saira } from 'next/font/google'
import {ReplyProvider} from "@/context/ReplyCommentContext"

export const metadata: Metadata = {
  title: "A1 code",
  description: "Best place of finding the best projects",
};

const outfit = Saira({
  subsets:["latin"],
  variable:"--font-saira"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${outfit.variable}`}>
        <ReplyProvider>
        {children}
        </ReplyProvider>
        <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Copyright © 2026 A1 Code. All rights reserved.</p>
          <p className="font-semibold text-slate-900">Ready-made projects for faster launches.</p>
        </div>
      </footer>
      </body>
      
    </html>
  );
}
