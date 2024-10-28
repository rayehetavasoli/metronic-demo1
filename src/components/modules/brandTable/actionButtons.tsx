'use client';
import React from 'react';
import { Edit, Trash } from 'iconsax-react';
import { ActionButtonsProps } from '@/types';


const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete }) => {
  return (
    <>
      <button
        className="text-blue-500 hover:text-blue-700 transition-colors"
        onClick={onEdit}
      >
        <Edit />
      </button>
      <button
        className="text-red-500 hover:text-red-700 transition-colors"
        onClick={onDelete}
      >
        <Trash />
      </button>
    </>
  );
};

export default ActionButtons;
