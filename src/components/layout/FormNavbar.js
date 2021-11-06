import React, { Fragment } from 'react';

const FormNavbar = () => {
    return (
        <Fragment>
            <header class='header'>
                <div class='header-logo'>
                    <i class='fas fa-file-alt'></i>
                    <h2 class='header-form-name'>Formulario sin titulo</h2>
                </div>
                <div class='navigation'>
                    <a href='./formdetail.html' class='navigation-link'>
                        <h3>Questions</h3>
                    </a>
                    <div class='navigation-answers'>
                        <a href='' class='navigation-link'>
                            <h3>Answers</h3>
                        </a>
                        <div class='underline'></div>
                    </div>
                    <a href='' class='navigation-link'>
                        <h3>Apply</h3>
                    </a>
                </div>
                <div class='header-search'>
                    <input
                        type='text'
                        class='search-txt'
                        placeholder='Search answer...'
                    />
                    <button class='search-button'>
                        <i class='fa fa-search'></i>
                    </button>
                </div>
            </header>
        </Fragment>
    );
};

export default FormNavbar;
