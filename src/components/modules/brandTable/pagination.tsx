import React from 'react';
import { PaginationProps } from '@/types';

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrev}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
        }`}
        disabled={currentPage === 1}
      >
        ❮
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <span
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 rounded-lg text-center text-sm font-normal cursor-pointer ${
              currentPage === page ? 'bg-blue-500 text-white font-bold' : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {page}
          </span>
        );
      })}

      <button
        onClick={handleNext}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
        }`}
        disabled={currentPage === totalPages}
      >
        ❯
      </button>
    </div>
  );
};

export default Pagination;
