import React, { Fragment, useContext } from 'react';
import MainNavbar from './MainNavbar';
import FormNavbar from './FormNavbar';
import NavigationContext from '../../context/navigation/navigationContext';

const Navbar = () => {
    const naviagtionContext = useContext(NavigationContext);
    const { currentPage, setCurrentPage } = naviagtionContext;
    const nonUsedPages = ['AT_LOGIN', 'AT_APPLY', 'AT_RESPONSE'];
    return (
        <Fragment>
            {!nonUsedPages.includes(currentPage) && (
                <Fragment>
                    {currentPage === 'AT_FORMS' ? (
                        <MainNavbar
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    ) : (
                        <FormNavbar
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default Navbar;
