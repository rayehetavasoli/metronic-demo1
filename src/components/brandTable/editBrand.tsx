import React from 'react';
import BrandForm from './brandForm';
import { EditBrandProps } from '@/types/main';

export const EditBrand: React.FC<EditBrandProps> = ({ brand, onClose, onUpdate }) => (
  <BrandForm
    brand={brand}
    onClose={onClose}
    onSave={onUpdate}
    mode="edit"
  />
);
