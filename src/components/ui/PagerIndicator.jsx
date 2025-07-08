'use client';

import React from 'react';

const PagerIndicator = ({ 
  totalPages = 3, 
  currentPage = 0, 
  onPageChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-row gap-x-4 ${className}`} {...props}>
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`
            w-5
            h-5
            rounded-lg
            cursor-pointer
            transition-colors
            duration-200
            ${index === currentPage ? 'bg-pager-1' : 'bg-pager-2'}
          `.trim().replace(/\s+/g, ' ')}
          onClick={() => onPageChange && onPageChange(index)}
        />
      ))}
    </div>
  );
};

export default PagerIndicator;