import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="w-full h-1/25 self-stretch px-10 py-3 bg-[#e2e2e2] shadow justify-between items-center inline-flex">
        <div className="h-6 justify-start items-center gap-4 flex">
            <Link href="/about-us" className="text-center text-gray-300 text-md font-normal  ">درباره ما</Link >
            <Link href="/support" className="text-center text-gray-300 text-md font-normal  ">پشتیبانی</Link >
        </div>
        <div className="h-6 justify-center items-center gap-4 flex">
            <Link href="/dashboard" className="text-center text-gray-300 text-md font-normal  ">داشبورد</Link>
            <Link href="/users" className="text-center text-gray-300 text-md font-normal  ">کاربر</Link>
        </div>
    </div>
  )
}

export default Footer