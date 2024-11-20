import React from 'react';
import PartForm from './PartForm';
import { AddPartProps } from '@/types/main';

export const AddPart: React.FC<AddPartProps> = ({ onClose, onAdd }) => (
  <PartForm
    onClose={onClose}
    onSave={onAdd}
    mode="add"
  />
);

