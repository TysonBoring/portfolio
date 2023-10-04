import React from 'react';
import 'tailwindcss/tailwind.css';

interface ListProps {
  children?: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-4'>
      {children}
    </div>
  );
};

export default List;