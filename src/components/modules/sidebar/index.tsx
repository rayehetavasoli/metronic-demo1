import React from 'react'
import { Element3 , InfoCircle , Notepad , UserEdit} from 'iconsax-react'
import Image from 'next/image'
import Vector from "../../../assets/images/Vector.png";
import Link from 'next/link';

function Sidebar() {
  return (
    <div className="self-stretch bg-white dark:bg-[#1E1E1E] flex-col justify-start items-end inline-flex h-lvh w-1/10" dir='rtl'>
    <div className="self-stretch px-4 py-7 justify-center items-center gap-px inline-flex">
      <Image width="95" height="13" src={Vector} alt='logo' />
    </div>
    <div className=" px-8 py-4 flex-col justify-center items-start gap-4 flex">
        <div className="justify-center items-center gap-[6px] inline-flex">
          <Element3 className="w-5 h-5 relative justify-center items-center flex text-black dark:text-[#AAAAAA]" color="currentColor"/>
            <Link href="/dashboard" className="text-center text-black dark:text-gray-200 text-md font-medium hover:text-blue-primary">داشبورد</Link>
                
        </div>
        <div className="justify-center items-start gap-[6px] inline-flex">
          <InfoCircle className="w-5 h-5 relative justify-center items-center flex text-[#606060]" color="currentColor"/>
            <div className="text-center text-gray-400 dark:text-gray-400 text-md font-normal">اطلاعات پایه</div>
                
        </div>
        <div className="flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch px-2 justify-center items-center gap-2 inline-flex">
               <UserEdit className="w-5 h-5 justify-center items-center flex  text-black dark:text-[#AAAAAA]" color="currentColor"/>
                <Link href="/users" className="text-center text-black dark:text-gray-200 text-md font-medium hover:text-blue-primary ">کاربر</Link>
                   
            </div>
            <div className="self-stretch px-2 justify-center items-center gap-2 inline-flex">
              <Notepad color="currentColor" className="w-5 h-5 relative justify-center items-center flex text-black dark:text-[#AAAAAA]"/>
                <Link href="/brands" className="text-center text-black  dark:text-gray-200 text-md font-medium  hover:text-blue-primary ">برند </Link>
                  
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar


