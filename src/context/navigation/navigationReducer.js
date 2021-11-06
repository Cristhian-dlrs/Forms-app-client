import { SET_PAGE } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_PAGE: {
            return (state = action.payload);
            console.log(action.payload);
        }

        default:
            return state;
    }
};
