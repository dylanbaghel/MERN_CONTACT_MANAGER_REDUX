import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { editContact } from './../actions/contacts';

const EditContact = (props) => (
    <div>
        <ContactForm 
            contact={props.contact}
            onSubmit={(contact) => {
                props.dispatch(editContact(props.contact._id, contact));
                props.history.push('/');
            }}
            formSubmitButton="Edit Contact"
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find((contact) => contact._id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditContact);