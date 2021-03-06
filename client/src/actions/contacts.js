import axios from 'axios';
//ACTIONS

const addContact = (contact) => dispatch => {
    axios
        .post('http://mern-contact-manager.herokuapp.com/api/contacts', contact)
        .then((res) => {
            dispatch({
                type: 'ADD_CONTACT',
                contact: res.data.contact
            })
        });
};

const removeContact = ({ _id }) => dispatch => {
    axios
        .delete(`http://mern-contact-manager.herokuapp.com/api/contacts/${_id}`)
        .then((res) => {
            dispatch({
                type: 'REMOVE_CONTACT',
                _id: res.data.contact._id
            });
        });
};

const editContact = (_id, updates) => dispatch => {
    axios
        .put(`http://mern-contact-manager.herokuapp.com/api/contacts/${_id}`, updates)
        .then((res) => {
            dispatch({
                type: 'EDIT_CONTACT',
                _id: res.data.contact._id,
                updates: res.data.contact
            })
        });
};

const setContact = () => dispatch => {
    
    axios
        .get('http://mern-contact-manager.herokuapp.com/api/contacts')
        .then((res) => {
            dispatch({
                type: 'SET_CONTACT',
                contacts: res.data.contacts
            })
        });
};

export {
    addContact,
    removeContact,
    editContact,
    setContact
};