import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApplyQuestionItem from '../questions/ApplyQuestionItem';
import NavigationContext from '../../context/navigation/navigationContext';

const Apply = () => {
    const naviagtionContext = useContext(NavigationContext);
    const { setCurrentPage } = naviagtionContext;
    const goToQuestions = () => setCurrentPage('AT_QUESTIONS');
    return (
        <div className='main'>
            <div class='respondant-info'>
                <input class='respondant-name' type='text' placeholder='Name' />
            </div>
            <div className='apply-responses '>
                <ApplyQuestionItem value={'Answer...'} isActiveAnswer={true} />
                <ApplyQuestionItem isActiveAnswer={false} />
            </div>
            <Link onClick={goToQuestions} to='/questions'>
                <button class='apply-button-save'>Save Answers</button>
            </Link>
        </div>
    );
};

export default Apply;
