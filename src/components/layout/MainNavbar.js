import React, { Fragment } from 'react';

const MainNavbar = () => {
    return (
        <Fragment>
            <header class='header'>
                <div class='header-logo'>
                    <i class='fas fa-file-alt'></i>
                    <h2 class='header-title'>
                        <span class='letter-1'>F</span>
                        <span class='letter-2'>o</span>
                        <span class='letter-3'>r</span>
                        <span class='letter-4'>m</span>
                        <span class='letter-5'>s</span>
                    </h2>
                </div>
                <div class='header-search'>
                    <input type='text' class='search-txt' placeholder='Search form...' />
                    <button class='search-button'>
                        <i class='fa fa-search'></i>
                    </button>
                </div>
            </header>
        </Fragment>
    );
};

export default MainNavbar;
