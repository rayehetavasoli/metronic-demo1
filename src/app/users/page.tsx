import React from 'react'
import {UserTable} from '@/components/userTable/index'
import {users} from '@/db/main'
import MainLayout from '@/view/layout/MainLayout'

function Users() {
  return (
    <MainLayout>
      <UserTable data={users} />
    </MainLayout>
  )
}

export default Users