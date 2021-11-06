import { USER_LOGIN, USER_REGISTER, ERROR } from '../types';

export default (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload,
                loggedIn: true,
            };

        case ERROR:
            return {
                ...state,
                errors: action.payload,
                loggedIn: false,
            };

        default:
            return state;
    }
};
