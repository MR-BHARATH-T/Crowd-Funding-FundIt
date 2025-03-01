
// import React from "react";
// import "./Header.css";
// const Header = ({ title, description, showSearchBar, onSearch }) => {
//     return (
//       <header className="header">
//         <h1>{title}</h1>
//         <p>{description}</p>
//         {showSearchBar && (
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={onSearch}
//           />
//         )}
//       </header>
//     );
//   };
  
//   export default Header;



import React, { useState } from "react";
import "./Header.css";

const Header = ({ title, description, showSearchBar, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Search Input
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="header">
      {/* Background Overlay for Better Visuals */}
      <div className="header-overlay"></div>

      {/* Header Content */}
      <div className="header-content">
        <h1>{title}</h1>
        <p>{description}</p>

        {/* Search Bar */}
        {showSearchBar && (
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="🔍 Search campaigns..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="search-btn">Search</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
