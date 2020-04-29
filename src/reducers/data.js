import { API_RECEIVE_DATA } from '../actions';

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case API_RECEIVE_DATA:
            return { ...state, data: action.data };
        default:
            return state;
    }
}