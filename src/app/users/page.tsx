import React from 'react'
import {UserTable} from '@/components/userTable/index'
import {users} from '@/db/main'

function Users() {
  return (
    <UserTable data={users}/>
  )
}

export default Users