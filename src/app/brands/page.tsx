import React from 'react'
import {BrandTable} from '@/components/brandTable/index'
import {brands} from '@/db/main'

function Brands() {
  return (
    <BrandTable data={brands}/>
  )
}

export default Brands