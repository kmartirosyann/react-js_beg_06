import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const API_HOST = process.env.REACT_APP_API_HOST;

class SiginUp extends Component {
    state = {
        email: '',
        password: '',
        mesage: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        const { email, password, mesage } = this.state
        fetch(`${API_HOST}/user/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
             .then(data => console.log(data))
            .catch(err => {
                if (err) {
                    this.setState({ mesage: "You not register" })
                    throw err
                }
            })
        this.setState({ mesage })
        this.props.history.push('/todo')
    }


    render() {
        const { mesage } = this.state
        return (
            <Container style={{ width: "50%", textAlign: 'start' }}>
                <Form className="align-self-start my-5 block-example border border-dark rounded-top p-2">
                    <div className="align-self-start  block-example border border-dark rounded-top p-3">
                        <h1><i className="bi bi-person-x-fill mx-5" style={{ fontSize: '15vh' }}></i>USER</h1>
                        <Form.Group controlId="formBasicEmail" className=" my-2" >
                            <Form.Label >Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Enter email" />
                            <Form.Text style={{ color: "red" }}>
                                {mesage && mesage}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                autoComplete="off"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Password" />
                            <Form.Text style={{ color: "red" }}>
                                {mesage && mesage}
                            </Form.Text>
                        </Form.Group>
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


export default SiginUp