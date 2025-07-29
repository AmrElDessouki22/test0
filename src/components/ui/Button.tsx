'use client';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isDelete?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, isDelete = false }) => (
  <button
    onClick={onClick}
    className={`font-bold py-2 px-4 rounded ${isDelete ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
  >
    {children}
  </button>
);
