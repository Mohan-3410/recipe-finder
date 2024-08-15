import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/utils/themeSwitcher';

const Navbar = () => {
  return (
    <nav className="bg-primary/90 text-primary-foreground h-20 flex items-center sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li className="hover:text-secondary-foreground font-bold">
              <Link href="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-3xl font-bold cursive text-primary-foreground">Recipe Finder
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <div className="relative">
            <span className="text-2xl">&#128722;</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
