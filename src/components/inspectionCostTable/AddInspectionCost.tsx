import React from 'react';
import InspectionCostForm from './InspectionCostForm';
import { AddInspectionCostProps } from '@/types/main';

export const AddInspectionCost: React.FC<AddInspectionCostProps> = ({ onClose, onAdd }) => (
  <InspectionCostForm
    onClose={onClose}
    onSave={onAdd}
    mode="add"
  />
);

