import React from 'react';
import InspectionCostForm from './InspectionCostForm';
import { EditInspectionCostProps } from '@/types/main';

export const EditInspectionCost: React.FC<EditInspectionCostProps> = ({ inspectionCost, onClose, onUpdate }) => (
  <InspectionCostForm
    inspectionCost={inspectionCost}
    onClose={onClose}
    onSave={onUpdate}
    mode="edit"
  />
);
