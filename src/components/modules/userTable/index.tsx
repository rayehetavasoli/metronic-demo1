'use client';
import React, { FC, useState } from 'react';
import HeaderSection from './headerSection';
import Footer from './footer';
import { Table } from './userTable';
import EditUser from './editUser';
import DeleteUser from './deleteUser';
import { User, UserTableProps } from '@/types';

const UserTable: FC<UserTableProps> = ({ data }) => {
  const [users, setUsers] = useState<User[]>(data);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);

  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
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
      setUsers(users.filter((user) => user.id !== selectedUser.id));
      closeModal();
    }
  };

  const updateUser = (updatedUser: User) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    closeModal();
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType(null);
  };

  return (
    <div className="px-10 py-8 bg-gray-50 rounded-3xl shadow-lg w-full mx-20">
      <HeaderSection onAddUser={handleAddUser} />
      <Table data={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />

      {modalType === 'edit' && selectedUser && (
        <EditUser user={selectedUser} onClose={closeModal} onUpdate={updateUser} />
      )}

      {modalType === 'delete' && selectedUser && (
        <DeleteUser user={selectedUser} onCancel={closeModal} onDelete={confirmDelete} />
      )}
      <Footer />
    </div>
  );
};

export { UserTable };
