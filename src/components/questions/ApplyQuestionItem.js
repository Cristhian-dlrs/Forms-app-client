import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ApplyQuestionItem = ({ disabled, value }) => {
    const [isActive, setIsActive] = useState(false);

    const activate = () => setIsActive(true);
    const deactivate = () => setIsActive(false);

    return (
        <Fragment>
            <div
                onFocus={activate}
                onBlur={deactivate}
                className={
                    isActive
                        ? 'apply-question-card question-card-active'
                        : 'apply-question-card'
                }
            >
                <h3 class='apply-question'>Random question?</h3>
                <input
                    disabled={disabled}
                    class='apply-answer'
                    type='text'
                    placeholder={value}
                />
            </div>
        </Fragment>
    );
};

ApplyQuestionItem.ropTypes = {
    disabled: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

export default ApplyQuestionItem;
