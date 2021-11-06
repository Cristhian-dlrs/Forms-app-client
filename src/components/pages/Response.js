import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApplyQuestionItem from '../questions/ApplyQuestionItem';
import NavigationContext from '../../context/navigation/navigationContext';

const Response = () => {
    const naviagtionContext = useContext(NavigationContext);
    const { setCurrentPage } = naviagtionContext;
    const goToAnswers = () => setCurrentPage('AT_ANSWERS');
    return (
        <div className='main'>
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
            <Link onClick={goToAnswers} to='/answers'>
                <button class='apply-button-save'>Back</button>
            </Link>
        </div>
    );
};

export default Response;
