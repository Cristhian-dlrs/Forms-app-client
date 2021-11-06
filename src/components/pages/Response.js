import React, { Fragment } from 'react';
import ApplyQuestionItem from '../questions/ApplyQuestionItem';

const Response = () => {
    return (
        <Fragment>
            <div class='respondant-info'>
                <input
                    disabled='true'
                    class='respondant-name'
                    type='text'
                    placeholder='Name'
                />
            </div>
            <div className='apply-responses '>
                <ApplyQuestionItem value={'Random Answer...'} disabled={true} />
                <ApplyQuestionItem value={'Random Answer...'} disabled={true} />
                <ApplyQuestionItem value={'Random Answer...'} disabled={true} />
            </div>
            <button class='apply-button-save'>Back</button>
        </Fragment>
    );
};

export default Response;
