import React from 'react';
import UserForm from './UserForm';
import { EditUserProps } from '@/types/main';

export const EditUser: React.FC<EditUserProps> = ({ user, onClose, onUpdate }) => (
  <UserForm
    user={user}
    onClose={onClose}
    onSave={onUpdate}
    mode="edit"
  />
);

