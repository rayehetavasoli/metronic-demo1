import React from 'react'
import {PartTable} from '@/components/partTable/index'
import {elevatorParts} from '@/db/main'
import MainLayout from '@/view/layout/MainLayout'

function Parts() {
  return (
    <MainLayout>
      <PartTable data={elevatorParts}/>
    </MainLayout>
  )
}

export default Parts
