import React from 'react'
import { AddCircle, SearchNormal1, Notepad } from 'iconsax-react'
import './style.css'

function HeaderSection() {
  return (
    <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
      <div className='p-2 justify-center items-center gap-2 inline-flex'>
        <Notepad className="w-6 h-6"/>
        <h1 className="text-2xl font-semibold">برند ها</h1>
      </div>
      <div className="flex items-center gap-3">
    <div className="search-container">
      <button>
      <SearchNormal1 className="search-icon" direction="rtl" />
      </button>
      <input
        className="search-input"
        type="search"
        placeholder="کاربر مورد نظر را جستوجو کنید"
      />
    </div>

      <button>
        <AddCircle className="w-8 h-8" color='#4A4A4A' />
      </button>
    </div>
  </header>
   
  )
}

export default HeaderSection



