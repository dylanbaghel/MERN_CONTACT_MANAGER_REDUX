//FILTERS ACTIONS

const setTextFilter = ({ text }) => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
};

export { setTextFilter }