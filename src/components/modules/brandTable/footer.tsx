import React from 'react'
import Pagination from './pagination'

function Footer() {
  return (
    <div className="flex justify-between items-center mt-4">
    <Pagination />
    <div className="flex items-center gap-2">
      <span className="text-center text-[#4a4a4a] text-sm font-medium">در هر صفحه</span>
      <select className="border rounded-[16px] border-blue-primary border-2 items-center justify-center px-2 py-1 flex text-center text-[#4a4a4a] text-sm font-medium">
        {[5, 10, 15,20].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span className="text-center text-[#4a4a4a] text-sm font-medium">نمایش</span>
    </div>
  </div>
  )
}

export default Footer