"use client";

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar-main';

const MainLayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  
  // Daftar pages yang membutuhkan navbar
  const pagesWithNavbar = ['/dashboard'];
  const shouldShowNavbar = pagesWithNavbar.includes(pathname);

  if (shouldShowNavbar) {
    return (
      <div id="main-app" className="flex flex-col min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div id="page-content" className="flex-1">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div id="main-app">
      {children}
    </div>
  );
};

export default MainLayoutWrapper;