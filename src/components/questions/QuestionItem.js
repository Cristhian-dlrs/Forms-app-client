import React, { Fragment, useState, useContext } from 'react';

const Questionitem = () => {
    const [isActive, setIsActive] = useState(false);

    const activate = () => setIsActive(true);
    const deactivate = () => setIsActive(false);

    return (
        <Fragment>
            <div onFocus={activate} onBlur={deactivate} className='question-wrapper'>
                <div
                    className={
                        isActive ? 'question-card question-card-active' : 'question-card'
                    }
                >
                    <input
                        className='question form-description'
                        type='text'
                        placeholder='Question title'
                    />
                    <input
                        className='answer form-description'
                        type='text'
                        placeholder='Answer long text...'
                        disabled='true'
                    />
                </div>
                <div className={isActive ? 'question-tools' : 'display-none'}>
                    <button className='add-question'>
                        <i className='fa fa-plus-circle'></i>
                    </button>
                    <button className='delete-question'>
                        <i className='fas fa-trash-alt'></i>
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Questionitem;
