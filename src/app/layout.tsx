import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamGym Assistant",
  description: "App for helping Teamgym instructors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between w-full p-4 border-b border-gray-500 border-opacity-25">
          <div>
            <h1>TeamGym Assistent v0.1.1</h1>
          </div>
          <div className="flex space-x-4">
            <input name="search" type="text" placeholder="Search here..." className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="border border-white text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded">Sign in</button>
          </div>
        </header>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
