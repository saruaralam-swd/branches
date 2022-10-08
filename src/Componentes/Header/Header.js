import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
    </header>
  );
};

export default Header;