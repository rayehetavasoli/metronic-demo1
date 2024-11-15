import React from 'react';
import BrandForm from './brandForm';
import { AddBrandProps } from '@/types/main';

export const AddBrand: React.FC<AddBrandProps> = ({ onClose, onAdd }) => (
  <BrandForm
    onClose={onClose}
    onSave={onAdd}
    mode="add"
  />
);

