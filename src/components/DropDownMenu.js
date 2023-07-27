// DropdownMenu.js
import React, { useState } from 'react';

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (props) => {
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
          <a href="#" className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray"
          onClick={()=>{
            let copy = props.type
            copy = 0
            props.setType(copy)
            console.log(props.type)
          }}>주관식</a>
          <a href="#" className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray"
          onClick={()=>{
            let copy = props.type
            copy = 1
            props.setType(copy)
            console.log(props.type)
          }}>첨부파일</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
