import React from 'react';

export default function Nav({currentPage, handlePageChange}) {
    return(
    <ul className="nav">
        <span>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        </span>
    </ul>
    );
}