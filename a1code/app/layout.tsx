import type { Metadata } from "next";
import "./globals.css";
import { Saira } from "next/font/google";
import { ReplyProvider } from "@/context/ReplyCommentContext";
import { UserContextProvider } from "@/context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Providers } from "./provider";
import AppFooter from "@/Components/AppFooter";

export const metadata: Metadata = {
  title: "A1 Code",
  description: "Best place of finding the best projects",
};

const outfit = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${outfit.variable}`}>
        <ReplyProvider>
          <UserContextProvider>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
          >
            <Providers>{children}</Providers>
            <AppFooter />
          </GoogleOAuthProvider>
          </UserContextProvider>
        </ReplyProvider>
      </body>
    </html>
  );
}
