import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { setContact } from './../actions/contacts';
import TextFilterInput from './TextFilterInput';
import getFilteredContacts from './../selectors/getFilteredContacts';

class Contacts extends React.Component {

    componentDidMount() {
        this.props.dispatch(setContact());
    }

    render() {
        return (
            <div className="container">
                <TextFilterInput />
                {
                    this.props.contacts.map((contact) => {
                        return <Contact
                            key={contact._id}
                            contact={contact}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: getFilteredContacts(state.contacts, state.filters)
    };
};

export default connect(mapStateToProps)(Contacts);