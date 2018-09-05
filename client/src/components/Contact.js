import React from 'react';
import { removeContact } from './../actions/contacts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleExpanded = this.onToggleExpanded.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
        this.state = {
            isExpanded: false
        };
    }

    onToggleExpanded() {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    handleDeleteContact(_id) {
        this.props.dispatch(removeContact({ _id }));
    }

    render() {

        const { _id, name, email, phone } = this.props.contact;

        return (
            <div className="card card-body mb-2">
                <h2>
                    <Link to={`/edit/${_id}`}>{name}   </Link>
                    <i
                        className="fas fa-caret-down"
                        onClick={this.onToggleExpanded}
                    >
                    </i>
                    <i 
                        className="fas fa-times float-right"
                        onClick={this.handleDeleteContact.bind(this, _id)}
                    >
                    </i>
                </h2>
                {this.state.isExpanded &&
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                }
            </div>
        );
    }
}

export default connect()(Contact);