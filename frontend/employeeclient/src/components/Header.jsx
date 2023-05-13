import React, { useState } from 'react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Logo</a>
        <button className="navbar-toggle" onClick={handleToggle}>
          <span className="navbar-toggle-icon"></span>
        </button>
      </div>
      <ul className={isOpen ? "navbar-nav active" : "navbar-nav"}>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/employees">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

