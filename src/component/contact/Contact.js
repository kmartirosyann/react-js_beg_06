import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import './contact.modal.css';
import { changeContactForm, contactOnBlur, contactSubmit } from '../../store/actions/actionContactReduser'


class Contact extends Component {

    handleChange = (e) => {
        const { changeContactForm } = this.props
        changeContactForm(e)

    }

    handelBlur = (e) => {
        const { contactOnBlur } = this.props
        contactOnBlur(e)

    }



    handleSubmit = () => {

        const { name, email, message, isValit, contactSubmit } = this.props
        if (!isValit) {
            contactSubmit(name, email, message)

        }

    }


    render() {

        const { name, email, message, loading, errors, isValit } = this.props
        return (
            <Container style={{ width: "50%", textAlign: 'start' }}>
                <Form className="align-self-start my-5 block-example border border-dark rounded-top p-2">
                    <div className="align-self-start  block-example border border-dark rounded-top p-3">
                        <h1><i className="bi bi-person-x-fill mx-5" style={{ fontSize: '15vh' }}></i>CONTACT</h1>
                        <Form.Group >

                            <Form.Control
                                className={isValit && errors.name && "validet"}
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                onBlur={this.handelBlur}
                            />
                            <Form.Text style={{ color: "red" }}>
                                {isValit && errors.name}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                className={isValit && errors.email && "validet"}
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                onBlur={this.handelBlur}
                            />
                            <Form.Text style={{ color: "red" }}>
                                {isValit && errors.email}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                className={isValit && errors.message && "validet"}
                                as="textarea"
                                rows={3}
                                style={{ resize: "none" }}
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                                onBlur={this.handelBlur}
                            />
                        </Form.Group>
                        <Form.Text style={{ color: "red" }}>
                            {isValit && errors.message}
                        </Form.Text>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.contactReducer.name,
    email: state.contactReducer.email,
    message: state.contactReducer.message,
    errors: state.contactReducer.errors,
    isValit: state.contactReducer.isValit
})
const mapDispatchToProps = {
    changeContactForm,
    contactOnBlur,
    contactSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)