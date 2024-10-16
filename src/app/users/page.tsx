import React from 'react'
import {UserTable} from '@/components/modules/userTable/index'
import {users} from '@/components/modules/userTable/userTable'

function Users() {
  return (
    <UserTable data={users}/>
  )
}

export default Users