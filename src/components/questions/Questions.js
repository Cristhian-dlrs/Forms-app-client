import React, { Fragment, useState, useContext } from 'react';
import QuestionItem from './QuestionItem';

const Questions = () => {
    const [isActive, setIsActive] = useState(false);

    const activate = () => setIsActive(true);
    const deactivate = () => setIsActive(false);

    return (
        <Fragment>
            <div
                onFocus={activate}
                onBlur={deactivate}
                className={isActive ? 'form-info form-info-active' : 'form-info'}
            >
                <input className='form-name' type='text' placeholder='Form name' />
                <input
                    className='form-description'
                    type='text'
                    placeholder='Form description'
                />
            </div>
            <div className='form-questions'>
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
            </div>
        </Fragment>
    );
};

export default Questions;
