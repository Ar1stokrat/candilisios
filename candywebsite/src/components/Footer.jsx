import React from 'react';
import '../assets/styles/Footer.css'

export default function Footer() {
  return(
    <footer className='footer'>
      <div className="footer-left">
        <p>© 2010 <em>Candilicious</em></p>
      </div>
      <nav className='footer-right'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Candy</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Candy Shop</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </footer>
  );
};
