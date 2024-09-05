"use client";
import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      <div className="w-64 space-y-6 py-7 px-2 sm:relative overflow-x-hidden transition duration-300 ease-in-out transform h-screen border-r border-gray-500 border-opacity-25">
        <nav>
          <ul>
            <li>
              <a href="/" className="block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200" >
                Home
              </a>
            </li>
            <li>
              <a href="/tumbling" className="block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200">
                Tumbling
              </a>
            </li>
            <li>
              <a href="/trampet" className="block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200">
                Trampet
              </a>
            </li>
            <li>
              <a href="/floor" className="block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200">
                Floor
              </a>
            </li>
            <li>
              <a href="/score" className="block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200">
                Score
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Sidebar;
