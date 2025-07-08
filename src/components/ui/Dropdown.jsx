'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Dropdown = ({ 
  options = [], 
  value = '', 
  onChange, 
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange && onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`} {...props}>
      <div
        className={`
          w-full
          h-15
          px-4
          py-4
          border
          border-gray-400
          rounded-lg
          bg-white
          cursor-pointer
          flex
          items-center
          justify-between
          text-edittext-1
          font-roboto-serif
          text-lg
          leading-6
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `.trim().replace(/\s+/g, ' ')}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>{value || placeholder}</span>
        <Image
          src="/images/img_arrow_3.svg"
          alt="dropdown arrow"
          width={12}
          height={8}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      
      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-400 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-edittext-1 font-roboto-serif text-lg"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;