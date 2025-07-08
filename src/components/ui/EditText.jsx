'use client';

import React from 'react';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full
          h-15
          px-4
          py-4
          border
          border-gray-400
          rounded-lg
          text-edittext-1
          font-roboto-serif
          text-lg
          leading-6
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-transparent
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
    </div>
  );
};

export default EditText;