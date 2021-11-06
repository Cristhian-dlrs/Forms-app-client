import { USER_LOGIN, USER_REGISTER } from '../types';

export default (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload,
                loggedIn: action.status,
            };

        case ERROR:
            return {
                ...state,
                errors: payload,
            };

        default:
            return state;
    }
};
