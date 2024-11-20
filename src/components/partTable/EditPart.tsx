import React from 'react';
import PartForm from './PartForm';
import { EditPartProps } from '@/types/main';

export const EditPart: React.FC<EditPartProps> = ({ part, onClose, onUpdate }) => (
  <PartForm
    part={part}
    onClose={onClose}
    onSave={onUpdate}
    mode="edit"
  />
);
