import React from 'react'
import { Edit, Trash } from 'iconsax-react';
function ActionButtons() {
  return (
    <>
    <button className="text-blue-500 hover:text-blue-700 transition-colors">
      <Edit />
    </button>
    <button className="text-red-500 hover:text-red-700 transition-colors">
      <Trash />
    </button>
  </>
  )
}

export default ActionButtons