import React from 'react';
import Link from 'next/link';
import './style.css';

function Footer() {
  return (
    <div className="w-full h-1/25 self-stretch px-10 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary shadow justify-between items-center inline-flex">
      <div className="h-6 justify-start items-center gap-4 flex">
        <Link href="/about-us" className="footer-item dark:text-gray-300">درباره ما</Link>
        <Link href="/support" className="footer-item dark:text-gray-300">پشتیبانی</Link>
      </div>
      <div className="h-6 justify-center items-center gap-4 flex">
        <Link href="/dashboard" className="footer-item dark:text-gray-300">داشبورد</Link>
        <Link href="/users" className="footer-item dark:text-gray-300">کاربر</Link>
      </div>
    </div>
  );
}

export default Footer;
