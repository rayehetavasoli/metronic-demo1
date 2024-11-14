import React from 'react';
import UserForm from './userForm';
import { AddUserProps } from '@/types/main';

export const AddUser: React.FC<AddUserProps> = ({ onClose, onAdd }) => (
  <UserForm
    onClose={onClose}
    onSave={onAdd}
    mode="add"
  />
);