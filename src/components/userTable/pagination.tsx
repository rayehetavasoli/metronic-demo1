import React from 'react';
import { PaginationProps } from '@/types/main';

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

  const renderPages = () => {
    const pages = [];
    if (currentPage > 3) {
      pages.push("...");
    }

    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }
    pages.push(currentPage);
    if (currentPage < totalPages) {
      pages.push(currentPage + 1);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }


    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrev}
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'
        }`}
        disabled={currentPage === 1}
      >
        ❮
      </button>

      {renderPages().map((page, index) => (
        <span
          key={index}
          onClick={() => typeof page === 'number' && handlePageClick(page)}
          className={`px-2 py-1 rounded-2xl text-center text-sm font-normal cursor-pointer ${
            currentPage === page ? 'bg-blue-500 text-white font-bold' : 'text-black hover:bg-gray-200'
          } ${page === "..." ? 'cursor-default' : ''}`}
        >
          {page}
        </span>
      ))}

      <button
        onClick={handleNext}
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'
        }`}
        disabled={currentPage === totalPages}
      >
        ❯
      </button>
    </div>
  );
};

export default Pagination;
