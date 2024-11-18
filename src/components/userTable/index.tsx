'use client';
import React, { FC, useState, useMemo } from 'react';
import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './userTable';
import {EditUser} from './editUser';
import DeleteUser from './deleteUser';
import { User, UserTableProps } from '@/types/main';

const UserTable: FC<UserTableProps> = ({ data }) => {
  const [users, setUsers] = useState<User[]>(data);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(data); 
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = useMemo(() => Math.ceil(filteredUsers.length / pageSize), [filteredUsers.length, pageSize]);

  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredUsers.slice(startIndex, startIndex + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  const updateUsersState = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleAddUser = (newUser: User) => updateUsersState([...users, newUser]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = users.filter(({ firstName, lastName, email }) =>
      `${firstName} ${lastName} ${email}`.toLowerCase().includes(lowerQuery)
    );
    setFilteredUsers(filtered);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setModalType('edit');
  };

  const handleDeleteUser = (user: User) => {
    setSelectedUser(user);
    setModalType('delete');
  };

  const confirmDelete = () => {
    if (selectedUser) {
      updateUsersState(users.filter(user => user.id !== selectedUser.id));
      closeModal();
    }
  };

  const updateUser = (updatedUser: User) => {
    const updatedUsers = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
    updateUsersState(updatedUsers);
    closeModal();
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType(null);
  };

  return (
    <div className="px-10 py-8 bg-gray-50 dark:bg-dark-bg-table rounded-3xl shadow-lg w-full mx-18">
      <HeaderSection onAddUser={handleAddUser} onSearch={handleSearch} />

      <Table data={currentUsers} onEdit={handleEditUser} onDelete={handleDeleteUser} />

      {modalType === 'edit' && selectedUser && (
        <EditUser user={selectedUser} onClose={closeModal} onUpdate={updateUser} />
      )}

      {modalType === 'delete' && selectedUser && (
        <DeleteUser user={selectedUser} onCancel={closeModal} onDelete={confirmDelete} />
      )}
      
      <Footer
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1); 
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export { UserTable };
