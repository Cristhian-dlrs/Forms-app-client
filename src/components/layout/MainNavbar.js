import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = ({ currentPage, setCurrentPage }) => {
    const goToForms = () => setCurrentPage('AT_FORMS');
    const goToQuestions = () => setCurrentPage('AT_QUESTIONS');

    return (
        <Fragment>
            <header className='header'>
                <Link onClick={goToForms} to='forms'>
                    <div className='header-logo'>
                        <Link onClick={goToForms} to='forms'>
                            <i className='fas fa-file-alt'></i>
                        </Link>
                        <h2 className='header-title'>
                            <span className='letter-1'>F</span>
                            <span className='letter-2'>o</span>
                            <span className='letter-3'>r</span>
                            <span className='letter-4'>m</span>
                            <span className='letter-5'>s</span>
                        </h2>
                    </div>
                </Link>

                <div className='header-search'>
                    <input
                        type='text'
                        className='search-txt'
                        placeholder='Search form...'
                    />
                    <button className='search-button'>
                        <i className='fa fa-search'></i>
                    </button>
                </div>
                {currentPage === 'AT_FORMS' && (
                    <Link
                        onClick={goToQuestions}
                        to='forms'
                        className='add-form'
                        to='/questions'
                    >
                        <button className='addBtn'>
                            <i className='fas fa-plus-circle'></i>
                        </button>
                    </Link>
                )}
            </header>
        </Fragment>
    );
};

export default MainNavbar;
