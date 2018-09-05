import React from 'react';
import uuid from 'uuid';
import classnames from 'classnames';
import validator from 'validator';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: props.contact ? props.contact.name : '',
            email: props.contact ? props.contact.email : '',
            phone: props.contact ? props.contact.phone : '',
            errors: {}
        };
    };

    onNameChange(e) {
        let name = e.target.value;

        this.setState(() => ({
            name
        }));
    };

    onEmailChange(e) {
        let email = e.target.value;
        this.setState(() => ({
            email
        }));
    };

    onPhoneChange(e) {
        let phone = e.target.value;
        if (!phone || phone.match(/(?<!\d)\d{1,10}(?!\d)/)) {
            this.setState(() => ({
                phone
            }));
        }
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.name) {
            this.setState(() => ({
                errors: { name: 'Name is Required' }
            }));
            return;
        }
        if (!this.state.email) {
            this.setState(() => ({
                errors: { email: 'Email is Required' }
            }));
            return;
        } else if (!validator.isEmail(this.state.email)) {
            this.setState(() => ({
                errors: { email: 'Email is Invalid' }
            }));
            return;
        }
        if (!this.state.phone) {
            this.setState(() => ({
                errors: { phone: 'Phone is Required' }
            }));
            return;
        } else if (this.state.phone.length < 10) {
            this.setState(() => ({
                errors: { phone: 'Phone Must Be 10 Digits' }
            }));
            return;
        }

        this.props.onSubmit({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        });

    };

    render() {
        return (
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': this.state.errors.name
                                    })}
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                                />
                                <div className="invalid-feedback">
                                    {this.state.errors.name}
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': this.state.errors.email
                                    })}
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                                />
                                <div className="invalid-feedback">
                                    {this.state.errors.email}
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': this.state.errors.phone
                                    })}
                                    placeholder="Phone"
                                    value={this.state.phone}
                                    onChange={this.onPhoneChange}
                                />
                                <div className="invalid-feedback">
                                    {this.state.errors.phone}
                                </div>
                            </div>
                            <button
                                className="btn btn-primary"
                            >{this.props.formSubmitButton}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;