import React, { Fragment, useState, useContext } from 'react';
import MainNavbar from './MainNavbar';
import FormNavbar from './FormNavbar';
import NavigationContext from '../../context/navigation/navigationContext';

const Navbar = () => {
    const naviagtionContext = useContext(NavigationContext);
    const { currentPage, setCurrentPage } = naviagtionContext;
    return (
        <Fragment>
            {currentPage !== 'at_home' ? (
                <MainNavbar />
            ) : (
                <FormNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            )}
        </Fragment>
    );
};

export default Navbar;
