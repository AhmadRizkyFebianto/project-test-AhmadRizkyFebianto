// Navbar.js
import './navbar.css';
import React from 'react';
import Headroom from 'react-headroom';

const Navbar = () => {
  return (
    <Headroom style={{
        webkitTransition: 'all .5s ease-in-out',
        mozTransition: 'all .5s ease-in-out',
        oTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out'
    }}>
      <nav className="bg-opacity-90 fixed top-0 left-0 right-0 shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div><img src="/logo.png" alt="Gambar" style={{width: '100px', height: '50px'}}/></div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="/#" className="text-white ">
                  Work
                </a>
              </li>
              <li>
                <a href="/#" className="text-white ">
                  About
                </a>
              </li>
              <li>
                <a href="/#" className="text-white ">
                  Service
                </a>
              </li>
              <li>
                <a href="./ideas.js" className="text-white ">
                  Ideas
                </a>
              </li>
              <li>
                <a href="/#" className="text-white ">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#" className="text-white ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
