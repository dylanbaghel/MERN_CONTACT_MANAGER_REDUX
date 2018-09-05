//contact reducer
const contactReducerDefaultState = [];

const contactReducer = (state = contactReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                action.contact
            ];
        case 'REMOVE_CONTACT':
            return state.filter((contact) => {
                return contact._id !== action._id
            });
        case 'EDIT_CONTACT':
            return state.map((contact) => {
                if (contact._id !== action._id) {
                    return contact;
                }

                return {
                    ...contact,
                    ...action.updates
                };
            });
        case 'SET_CONTACT':
            return action.contacts
        default:
            return state;
    }
};

export default contactReducer;