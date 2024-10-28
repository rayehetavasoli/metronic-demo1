import React from 'react'
import {BrandTable} from '@/components/modules/brandTable/index'
import {brands} from '@/db/main'

function Brands() {
  return (
    <BrandTable data={brands}/>
  )
}

export default Brands