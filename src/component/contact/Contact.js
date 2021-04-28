import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import './contact.modal.css';
import { changeContactForm, contactSubmit } from '../../store/actions/actionContactReduser'
import validation from '../vaidation/validation'


class Contact extends Component {

    state={
        valid:{},
        
    }

    handleChange = (e) => {
        const { changeContactForm } = this.props
        changeContactForm(e)
    const {name} =e.target
        this.handelValid(name)
    }

    handelBlur = (e) => {
        const {name} =e.target
        this.handelValid(name)
    }

    handelValid =(name)=>{
        let valid = validation( this.props,name)
        this.setState({valid})
    }
componentDidUpdate(prevprops){
  if(prevprops !== this.props){
    let valid = validation( this.props)
    this.setState({valid}) 
  }
}

    handleSubmit = () => {

        const { name, email, message,  contactSubmit } = this.props
        const {valid}=this.state
         const {isValid}=valid
        if (!isValid) {
            contactSubmit(name, email, message)

        }

    }
// componentDidUpdate(prevProps){
//     if(prevProps !== this.props){
//      let valid = validation(this.props)
//         this.setState({valid})
//     }
// }

    render() {
        
        const { name, email, message, loading } = this.props
         const {valid}=this.state
         const {errors,isValid}=valid
        return (
            <Container style={{ width: "50%", textAlign: 'start' }}>
                <Form className="align-self-start my-5 block-example border border-dark rounded-top p-2">
                    <div className="align-self-start  block-example border border-dark rounded-top p-3">
                        <h1><i className="bi bi-person-x-fill mx-5" style={{ fontSize: '15vh' }}></i>CONTACT</h1>
                        <Form.Group >

                            <Form.Control
                                className={isValid && errors.name && "validet"}
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                onBlur={this.handelBlur}
                            />
                            <Form.Text style={{ color: "red" }}>
                                {isValid && errors.name}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                className={isValid && errors.email && "validet"}
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                onBlur={this.handelBlur}
                            />
                            <Form.Text style={{ color: "red" }}>
                                {isValid && errors.email}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                className={isValid && errors.message && "validet"}
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
                            {isValid && errors.message}
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

})
const mapDispatchToProps = {
    changeContactForm,
    contactSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)