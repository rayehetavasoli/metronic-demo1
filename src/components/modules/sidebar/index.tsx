import React from 'react'
import { Element3 , InfoCircle , Notepad , UserEdit} from 'iconsax-react'
import Image from 'next/image'
import Vector from "../../../assets/images/Vector.png";
import Link from 'next/link';

function Sidebar() {
  return (
    <div className="self-stretch bg-white flex-col justify-start items-end inline-flex h-lvh w-1/10">
    <div className="self-stretch px-4 py-7 justify-center items-center gap-px inline-flex">
      <Image width="95" height="13" src={Vector} alt='logo' />
    </div>
    <div className="pl-12 pr-7 py-4 flex-col justify-center items-end gap-4 flex">
        <div className="justify-center items-center gap-[6px] inline-flex">
            <Link href="/dashboard" className="text-center text-black text-md font-medium ">داشبورد</Link>
                <Element3 className="w-5 h-5 relative justify-center items-center flex" color="#000"/>
        </div>
        <div className="justify-center items-center gap-[6px] inline-flex">
            <div className="text-center text-gray-400 text-md font-normal">اطلاعات پایه</div>
                <InfoCircle className="w-5 h-5 relative justify-center items-center flex" color='#606060'/>
        </div>
        <div className="flex-col justify-center items-end gap-4 flex">
            <div className="self-stretch px-4 justify-end items-center gap-[6px] inline-flex">
                <Link href="/users" className="text-center text-black text-md font-medium  ">کاربر</Link>
                    <UserEdit className="w-5 h-5 justify-center items-center flex relative" color='#000'/>
            </div>
            <div className="px-4 justify-center items-center gap-[6px] inline-flex">
                <Link href="/brands" className="text-center text-black text-md font-medium  ">برند </Link>
                  <Notepad color='#000' className="w-5 h-5 relative justify-center items-center flex"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar


