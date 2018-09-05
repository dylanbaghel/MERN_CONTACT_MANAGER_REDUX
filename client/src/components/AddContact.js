import React from 'react';
import ContactForm from './ContactForm';
import { addContact } from './../actions/contacts';
import { connect } from 'react-redux';

const AddContact = (props) => (
    <div>
        <ContactForm 
            onSubmit={(contact) => {
                props.dispatch(addContact(contact));
                props.history.push('/');
            }}
            formSubmitButton="Add Contact"
        />
    </div>
);

export default connect()(AddContact);