import React from 'react'
import { AddCircle, SearchNormal1, Notepad } from 'iconsax-react'

function HeaderSection() {
  return (
    <header className="flex justify-between items-center mb-3 " dir="rtl">
      <div className='p-2 justify-center items-center gap-2 inline-flex'>
        <Notepad className="w-6 h-6"/>
        <h1 className="text-2xl font-semibold">برند ها</h1>
      </div>
   
    <div className="flex items-center gap-3">
      <div className="px-5 py-2 bg-[#f4f4f4] rounded-[20px] border border-[#5f5f5f] justify-center items-center gap-2 inline-flex">
        <SearchNormal1 className="w-4 h-4  justify-center items-center flex" direction="rtl"/>
        <div className="text-center text-[#5f5f5f] text-xs font-medium ">برند مورد نظر را جستوجو کنید </div> 
       
      </div>
      <AddCircle className="w-8 h-8" />
    </div>
  </header>
   
  )
}

export default HeaderSection



