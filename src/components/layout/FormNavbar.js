import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FormNavbar = ({ currentPage, setCurrentPage, isSaved = true }) => {
    const goToAnswers = () => setCurrentPage('AT_ANSWERS');
    const goToQuestions = () => setCurrentPage('AT_QUESTIONS');
    const goToForms = () => setCurrentPage('AT_FORMS');
    const goToApply = () => setCurrentPage('AT_APPLY');
    const save = () => {};

    return (
        <Fragment>
            <header className='header'>
                <Link onClick={goToForms} to='forms'>
                    <div className='header-logo'>
                        <i className='fas fa-file-alt'></i>

                        <h2 className='header-title'>
                            <span className='letter-1'>F</span>
                            <span className='letter-2'>o</span>
                            <span className='letter-3'>r</span>
                            <span className='letter-4'>m</span>
                            <span className='letter-5'>s</span>
                        </h2>
                    </div>
                </Link>
                <div className='navigation'>
                    <div
                        className={
                            currentPage === 'AT_QUESTIONS'
                                ? 'navigation-current'
                                : ''
                        }
                    >
                        <Link
                            to='questions'
                            onClick={goToQuestions}
                            href='#'
                            className='navigation-link'
                        >
                            <h3>Questions</h3>
                        </Link>
                        <div
                            className={
                                currentPage === 'AT_QUESTIONS'
                                    ? 'underline'
                                    : 'display-none'
                            }
                        ></div>
                    </div>
                    <div
                        className={
                            currentPage === 'AT_ANSWERS' ? 'navigation-current' : ''
                        }
                    >
                        <Link
                            to='answers'
                            onClick={goToAnswers}
                            href='#'
                            className='navigation-link'
                        >
                            <h3>Answers</h3>
                        </Link>
                        <div
                            className={
                                currentPage === 'AT_ANSWERS'
                                    ? 'underline'
                                    : 'display-none'
                            }
                        ></div>
                    </div>
                </div>

                {currentPage === 'AT_QUESTIONS' ? (
                    isSaved ? (
                        <Link onClick={goToApply} to='/apply'>
                            <button className='button-save'>Apply</button>
                        </Link>
                    ) : (
                        <button onClick={save} className='button-save'>
                            Save
                        </button>
                    )
                ) : (
                    <div className='header-search'>
                        <input
                            type='text'
                            className='search-txt'
                            placeholder='Search answer...'
                        />
                        <button className='search-button'>
                            <i className='fa fa-search'></i>
                        </button>
                    </div>
                )}
            </header>
        </Fragment>
    );
};

export default FormNavbar;
