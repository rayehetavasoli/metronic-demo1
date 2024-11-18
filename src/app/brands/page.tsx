import React from 'react'
import {BrandTable} from '@/components/brandTable/index'
import {brands} from '@/db/main'
import MainLayout from '@/view/layout/MainLayout'

function Brands() {
  return (
    <MainLayout>
      <BrandTable data={brands}/>
    </MainLayout>
  )
}

export default Brands