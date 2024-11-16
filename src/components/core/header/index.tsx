import { Logout } from 'iconsax-react'
import React from 'react'
import Image from 'next/image'
import person from "../../../assets/images/person.png";
import Link from 'next/link';
import Switcher from './themeMode';


function Header() {
  return (
    <div className="h-3/50 w-full px-20 py-3 bg-white dark:bg-dark-bg-secondary shadow justify-start items-center gap-6 inline-flex">
    <Link
      href="/auth/signin"
      className="self-stretch px-[6px] py-[6px] rounded-[28px] border border-blue-primary dark:border-dark-text-primary border-[2px] justify-center items-center gap-2 flex bg-white dark:bg-[#2C2C2C]"
    >
      <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
        <Logout
          color="currentColor"
          className="w-6 h-6 relative text-blue-primary dark:text-dark-text-primary"
        />
      </div>
      <div className="text-center text-blue-primary text-md font-medium dark:text-dark-text-primary">خروج</div>
    </Link>
  
    <Image
      width="40"
      height="40"
      src={person}
      alt="user"
      className="bg-light-bg-image dark:bg-dark-bg-image rounded-[60px] border border-blue-primary dark:border-dark-text-primary border-2 justify-center items-center gap-2.5 flex"
    />
  
    <Switcher />
  </div>
  
  )
}

export default Header
