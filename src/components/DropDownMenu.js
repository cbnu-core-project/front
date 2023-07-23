// DropdownMenu.js
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="py-2 px-4 bg-gray3 text-black text-h5 rounded-lg focus:outline-none"
        onClick={handleMenuClick}
      >
        형식 선택  ▾
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-gray3 rounded-lg shadow-lg">
          <a href="#" className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray">메뉴 항목 1</a>
          <a href="#" className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray">메뉴 항목 2</a>
          <a href="#" className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray">메뉴 항목 3</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
