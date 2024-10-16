import React from 'react'
import {BrandTable} from '@/components/modules/brandTable/index'
import {brands} from '@/components/modules/brandTable/brandTable'

function Brands() {
  return (
    <BrandTable data={brands}/>
  )
}

export default Brands