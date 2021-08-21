import Nav from './Nav';
import About from './pages/About-Me';
import Projects from './pages/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact-Me';


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
            {/* We are passing the currentPage from state and the function to update it */}
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
                {renderPage()}
        </div>
    )
}