import React, { useReducer } from 'react';
import NavigationReducer from './navigationReducer';
import NavigationContext from './navigationContext';
import { SET_PAGE } from '../types';

const NavigationState = (props) => {
    const initialState = 'AT_LOGIN';

    const [state, dispatch] = useReducer(NavigationReducer, initialState);

    // Account
    const setCurrentPage = (page) => dispatch({ type: SET_PAGE, payload: page });

    return (
        <NavigationContext.Provider
            value={{
                currentPage: state,
                setCurrentPage,
            }}
        >
            {props.children}
        </NavigationContext.Provider>
    );
};

export default NavigationState;
