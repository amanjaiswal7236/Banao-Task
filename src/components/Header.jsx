import React from 'react';

function Header() {
  return (
    <header className="p-10 m-5 relative w-full h-[440px] bg-cover bg-center md:h-[320px] sm:h-[240px]" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1717379026834-d36e707f4d24?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end md:justify-center md:mt-4">
        <h1 className="text-white text-4xl font-bold mb-4 mx-4 md:mb-2 md:mx-8 sm:text-2xl">Computer Engineering</h1>
        <p className="text-white text-lg mx-4 mb-4 md:mx-8 sm:text-sm">142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
}

export default Header;
