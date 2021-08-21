import Nav from './Nav';
import About from './pages/About-Me';
import Projects from './pages/Projects';

import React, { useState } from 'react';

export default function Portfolio() {
    const[currentPage, setCurrentPage] = useState('About');

    const renderPage= () => {
            if(currentPage === 'About') {
                return <About />;
            }
            if(currentPage === 'Projects'){
                return <Projects />;
            }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
        </div>
    )
}