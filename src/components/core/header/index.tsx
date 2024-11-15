import { Logout } from 'iconsax-react'
import React from 'react'
import Image from 'next/image'
import person from "../../../assets/images/person.png";
import Link from 'next/link';
import Switcher from './themeMode';


function Header() {
  return (
    <div className="h-3/50 w-full px-20 py-3 bg-white dark:bg-[#1E1E1E] shadow justify-start items-center gap-6 inline-flex">
    <Link
      href="/auth/signin"
      className="self-stretch px-[6px] py-[6px] rounded-[28px] border border-blue-primary dark:border-[#AAAAAA] border-[2px] justify-center items-center gap-2 flex bg-white dark:bg-[#2C2C2C]"
    >
      <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
        <Logout
          color="currentColor"
          className="w-6 h-6 relative text-[#1b84ff] dark:text-[#AAAAAA]"
        />
      </div>
      <div className="text-center text-blue-primary text-md font-medium dark:text-[#AAAAAA]">خروج</div>
    </Link>
  
    <Image
      width="40"
      height="40"
      src={person}
      alt="user"
      className="bg-[#f9f9f9] dark:bg-[#333333] rounded-[60px] border border-blue-primary dark:border-[#AAAAAA] border-2 justify-center items-center gap-2.5 flex"
    />
  
    <Switcher />
  </div>
  
  )
}

export default Header
