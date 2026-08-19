
import type { Metadata } from "next";
import {ReplyProvider} from "@/context/ReplyCommentContext"
import AdminChrome from "@/Components/admin/AdminChrome";

export const metadata: Metadata = {
  title: "A1Code Admin",
  description: "Best place of finding the best projects",
};




export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ReplyProvider>
          <AdminChrome>{children}</AdminChrome>
        </ReplyProvider>
        </>
  );
}
