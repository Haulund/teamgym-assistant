'use client'
import { ReactNode, useState } from 'react';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-full">
      {isOpen && (
        <div 
          className="w-64 space-y-6 py-7 px-2 sm:relative overflow-x-hidden transition duration-300 ease-in-out transform h-screen border-r border-gray-500 border-opacity-25"
        >
          <button 
            className="sticky top-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            Close menu
          </button>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/tumbling">Tumbling</a>
              </li>
              <li>
                <a href="/floor">Floor</a>
              </li>
              <li>
                <a href="/score">Score</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="flex-grow">
        {!isOpen && (
          <button onClick={() => setIsOpen(!isOpen)}>
            Open menu
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Sidebar;