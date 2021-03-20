import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


class Signin extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    mesage: new Map(),
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, mesage: new Map() })
  }

  handleSubmit = () => {
    const { firstName, lastName, email, password, rePassword } = this.state
    let err = new Map();
    const re = /\S+@\S+\.\S+/;
    if (firstName === '') {
      err.set('firstName', 'plise write your first name')
    } else if (lastName === '') {
      err.set('lastName', 'plise write your last name')
    } else if (!re.test(email)) {
      err.set('email', 'writing corect your email')
    } else if (password.length < 5) {
      err.set('password', "your passport must be at least five characters long ")
    } else if (password !== rePassword) {
      err.set('rePassword', "passport do not match repassport")
    } else {
      fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: firstName, surname: lastName, confirmPassword: rePassword })
      })
        .then(res => res.json())
      // .then(data=>this.setState({Uid:data}))
    }
    this.setState({ mesage: err })
    this.props.history.push('/siginup')
  }


  render() {
    const { mesage } = this.state

    return (
      <Container style={{ width: "50%", textAlign: 'start' }}>
        <Form className="align-self-start my-5 block-example border border-dark rounded-top p-2">
          <div className="align-self-start  block-example border border-dark rounded-top p-3">
            <h1><i className="bi bi-person-x-fill mx-5" style={{ fontSize: '15vh' }}></i>USER</h1>
            <Row>
              <Col>
                <Form.Control
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First name" />
                <Form.Text style={{ color: "red" }}>
                  {mesage.has('firstName') && mesage.get('firstName')}
                </Form.Text>
              </Col>
              <Col>
                <Form.Control
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last name" />
                <Form.Text style={{ color: "red" }}>
                  {mesage.has('lastName') && mesage.get('lastName')}
                </Form.Text>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail" className=" my-2" >
              <Form.Label >Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter email" />
              <Form.Text style={{ color: "red" }}>
                {mesage.has('email') && mesage.get('email')}
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
                {mesage.has('password') && mesage.get('password')}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPlaintextPassword">
              <Form.Label>Repassword</Form.Label>
              <Form.Control
                type="password"
                autoComplete="off"
                name="rePassword"
                value={this.state.rePassword}
                onChange={this.handleChange}
                placeholder="Repassword" />
              <Form.Text style={{ color: "red" }}>
                {mesage.has('rePassword') && mesage.get('rePassword')}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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


export default Signin