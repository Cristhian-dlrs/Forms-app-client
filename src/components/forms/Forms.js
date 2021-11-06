import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FormItem from './FormItem';
import NavigationContext from '../../context/navigation/navigationContext';

const Forms = () => {
    const naviagtionContext = useContext(NavigationContext);
    const { setCurrentPage } = naviagtionContext;
    const goToQuestions = () => setCurrentPage('AT_QUESTIONS');
    return (
        <div className='main'>
            <div className='forms-container'>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
                <Link onClick={goToQuestions} to='/questions'>
                    {' '}
                    <FormItem />
                </Link>
            </div>
        </div>
    );
};

export default Forms;
