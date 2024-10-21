import { Logout , Sun1 , ArrowDown2 } from 'iconsax-react'
import React from 'react'
import Image from 'next/image'
import person from "../../../assets/images/person.png";
import Link from 'next/link';
import ThemeDropdown from './themeMode';


function Header() {
  return (
    <div className="h-3/50 w-full px-20 py-3 bg-white shadow justify-start items-center gap-6 inline-flex">
    <Link href="/auth/signin" className="self-stretch px-[6px] py-[6px] rounded-[28px] border border-blue-primary border-[2px] justify-center items-center gap-2 flex">
        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
            <Logout color='#1b84ff' className="w-6 h-6 relative"/>
        </div>
        <div className="text-center text-blue-primary text-md font-medium  ">خروج</div>
    </Link>
    
    <Image width="40" height="40" src={person} alt='user' 
    className="bg-[#f9f9f9] rounded-[60px] border border-blue-primary border-2 justify-center items-center gap-2.5 flex"/>
    
    <ThemeDropdown/> 

</div>
  )
}

export default Header
