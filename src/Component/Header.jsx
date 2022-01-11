import React from "react";
const Header = () => {
  return (
    // Nav goes here
    <nav className="bg-gray-200">
      <div className="xl:max-w-5xl mx-auto border border-red-400">
          <div className="flex justify-between">
        {/* logo */}
        <div>logo</div>

        {/* primary nav */}
        <div> primary</div>

        {/* secondary nav */}
        <div>secondary nav</div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
