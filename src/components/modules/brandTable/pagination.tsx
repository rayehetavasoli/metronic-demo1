import React from 'react'


function Pagination() {
  return (
    <div className="flex items-center gap-2">
    <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">❮</button>
    {[1, 2, 3].map((page) => (
      <span key={page} className="px-2 py-1  rounded-lg text-center text-black text-sm font-normal">
        {page}
      </span>
    ))}
    <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center rotate-180">❮</button>
  </div>
  )
}

export default Pagination