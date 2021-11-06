import React, { Fragment } from 'react';
import ApplyQuestionItem from '../questions/ApplyQuestionItem';

const Apply = () => {
    return (
        <Fragment>
            <div class='respondant-info'>
                <input class='respondant-name' type='text' placeholder='Name' />
            </div>
            <div className='apply-responses '>
                <ApplyQuestionItem value={'Answer...'} isActiveAnswer={true} />
                <ApplyQuestionItem isActiveAnswer={false} />
            </div>
            <button class='apply-button-save'>Save Answers</button>
        </Fragment>
    );
};

export default Apply;
