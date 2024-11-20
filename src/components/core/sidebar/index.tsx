import React from 'react'
import { Element3 , InfoCircle , Notepad , UserEdit} from 'iconsax-react'
import Image from 'next/image'
import Vector from "../../../assets/images/Vector.png";
import Link from 'next/link';
import'./style.css';

function Sidebar() {
  return (
    <div className="self-stretch bg-white dark:bg-dark-bg-secondary flex-col justify-start items-end inline-flex min-h-lvh w-1/10" dir='rtl'>
    <div className="logo">
      <Image width="95" height="13" src={Vector} alt='logo' />
    </div>
    <div className="px-8 py-4 flex-col justify-center items-start gap-4 flex">
        <div className="justify-center items-center gap-[6px] inline-flex">
          <Element3 className="icon dark:text-dark-text-primary" color="currentColor"/>
            <Link href="/dashboard" className="link dark:text-gray-200 ">داشبورد</Link>
        </div>
        <div className="justify-center items-start gap-[6px] inline-flex">
          <InfoCircle className="baseinfo-icon" color="currentColor"/>
            <div className="baseinfo">اطلاعات پایه</div>
                
        </div>
        <div className="flex-col justify-center items-start gap-4 flex">
            <div className="baseinfo-item">
               <UserEdit className="icon dark:text-dark-text-primary" color="currentColor"/>
                <Link href="/users" className="link dark:text-gray-200 ">کاربر</Link>
                   
            </div>
            <div className="baseinfo-item">
              <Notepad  className="icon dark:text-dark-text-primary" color="currentColor"/>
                <Link href="/parts" className="link dark:text-gray-200 ">برند </Link>
                  
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar


