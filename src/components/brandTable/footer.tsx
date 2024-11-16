import React, { FC } from 'react';
import Pagination from './pagination';
import { FooterProps } from '@/types/main';

const Footer: FC<FooterProps> = ({ pageSize, onPageSizeChange, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-4 px-6">
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={onPageChange} 
      />
      
      <div className="flex items-center gap-2">
        <span className="text-center text-light-text-secondary text-sm font-medium">در هر صفحه</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border rounded-[16px] border-gray-500 border-2 items-center justify-center px-2 py-1 flex text-center text-light-text-secondary text-sm font-medium"
        >
          {[5, 10, 15, 20].map((size) => (
            <option
              key={size}
              value={size}
              className="bg-gray-300 dark:bg-dark-bg-secondary text-black dark:text-dark-text-primary text-sm font-medium rounded-[16px]"
            >
              {size}
            </option>
          ))}
        </select>
        <span className="text-center text-light-text-secondary text-sm font-medium">نمایش</span>
      </div>
    </div>
  );
};

export default Footer;
