import React, { useContext } from 'react';
import AnswerItem from './AnswerItem';
import { Link } from 'react-router-dom';
import NavigationContext from '../../context/navigation/navigationContext';

const Answers = () => {
    const naviagtionContext = useContext(NavigationContext);
    const { setCurrentPage } = naviagtionContext;
    const goToResponse = () => setCurrentPage('AT_RESPONSE');

    return (
        <div className='main'>
            <div className='forms-container'>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
                <Link onClick={goToResponse} to='/response'>
                    <AnswerItem />
                </Link>
            </div>
        </div>
    );
};

export default Answers;
