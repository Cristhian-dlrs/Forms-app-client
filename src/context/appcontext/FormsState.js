import React, { useReducer } from 'react';
import axios from 'axios';
import FormsContext from './formsContext';
import FormsReducer from './formsReducer';
import { USER_LOGIN, ERROR } from '../types';

const FormsState = (props) => {
    const initialState = {
        user: {},
        forms: [],
        form: {},
        questions: [],
        question: {},
        respondanted: {},
        answers: [],
        answer: {},
        errors: [],
        logedIn: false,
        loading: false,
    };

    const [state, dispatch] = useReducer(FormsReducer, initialState);

    // Account
    const login = (email, password) => {
        axios
            .post('https://localhost:5001/api/Account/login', { email, password })
            .then((res) => {
                dispatch({
                    type: USER_LOGIN,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ERROR,
                    payload: err.response,
                });
            });
    };

    const register = (email, password) => {
        axios
            .post('https://localhost:5001/api/Account/register', { email, password })
            .catch((err) => {
                dispatch({
                    type: ERROR,
                    payload: err.response,
                });
            });
    };

    // Forms

    // Questions

    // Respondants

    //Answers

    return (
        <FormsContext.Provider
            value={{
                user: state.user,
                forms: state.forms,
                form: state.form,
                questions: state.questions,
                question: state.question,
                respondanted: state.respondant,
                answers: state.answers,
                answer: state.answer,
                erros: state.erros,
                logedIn: state.logedIn,
                login,
                register,
            }}
        >
            {props.children}
        </FormsContext.Provider>
    );
};

export default FormsState;
