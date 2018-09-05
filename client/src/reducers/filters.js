//FILTER REDUCER
const filterReducerDefaultState = {
    text: ''
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                text: action.text
            };
        default:
            return state;
    }
};

export default filterReducer;