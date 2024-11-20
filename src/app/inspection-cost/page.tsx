import React from 'react'
import {inspectionCosts} from '@/db/main'
import MainLayout from '@/view/layout/MainLayout'
import { InspectionCostTable } from '@/components/inspectionCostTable/index'

function Parts() {
  return (
    <MainLayout>
      <InspectionCostTable data={inspectionCosts}/>
    </MainLayout>
  )
}

export default Parts
