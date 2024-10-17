'use client';
import React, { useState } from 'react';
import { Moon, Sun1 } from 'iconsax-react';

const ThemeDropdown: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleThemeChange = (mode: boolean) => {
    setIsDarkMode(mode);
    document.body.classList.toggle('dark-mode', mode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* دکمه برای باز کردن dropdown */}
      <div
        className={`flex items-center  px-2 py-1 rounded-full cursor-pointer transition duration-300 ease-in-out ${
          isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-primary hover:bg-blue-500'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* نمایش آیکون بر اساس حالت انتخابی */}
        {isDarkMode ? (
          <Moon className="w-7 h-7" color="#fff" />
        ) : (
          <Sun1 className="w-7 h-7" color="#fff" />
        )}
      </div>

      {/* dropdown منو */}
      {isOpen && (
        <div className="absolute bg-blue-primary dark:bg-gray-800 rounded-xl shadow-lg transition-opacity duration-300 ease-in-out opacity-100 z-10">
          <ul>
            <li
              className="flex items-center px-4 py-3 bg-blue-primary rounded-xl hover:bg-blue-500 dark:hover:bg-blue-500 hover:rounded-xl dark:hover:rounded-xl cursor-pointer transition duration-200"
              onClick={() => handleThemeChange(false)}
            >
              <Sun1 className="w-5 h-5 " color="#FFf" />
            </li>
            <li
              className="flex items-center px-4 py-3 bg-gray-800 rounded-xl  hover:bg-gray-500 dark:hover:bg-gray-500  hover:rounded-xl dark:hover:rounded-xl cursor-pointer transition duration-200"
              onClick={() => handleThemeChange(true)}
            >
              <Moon className="w-5 h-5 " color="#fff" />
              
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
