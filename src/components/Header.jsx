import React from 'react';

function Header() {
  return (
    <div className=" fixed z-50 w-screen bg-slate-300 p-6 px-16 ">
      {/* desktop and Tablet */}
      <div className="hidden md:flex w-full h-full"></div>

      {/* Mobile view */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
}

export default Header;
