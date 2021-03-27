import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './contact.modal.css'


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        loading: false,
        error:new Map()
    }
    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
        this.setState({error:new Map()})
    }

    handleSubmit = () => { 
       
        const { name, email, message, loading } = this.state
        this.setState({loading:true})
        const re = /\S+@\S+\.\S+/;
        let error = new Map()
        if (name.trim()===""){
          error.set('name', "Name is required")
        }else if(!re.test(email)){
            error.set("email","Email is required")
        }else if(message.trim()===""){
            error.set("message","message is required")
        }else {
            fetch('http://localhost:3001/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, message })
          })
            .then(res => res.json())
           .then(data=>console.log(data))
           .catch(err =>console.log("error contact",err))
           .finally(()=>this.setState({loading:false}))
           this.setState({name:'',email:'',message:''})
        }

        if(error){
            this.setState({error})
        }
           
    }

    render() {
        
        const { name, email, message, loading ,error} = this.state
        return (
            <Container style={{ width: "50%", textAlign: 'start' }}>
                <Form className="align-self-start my-5 block-example border border-dark rounded-top p-2">
                    <div className="align-self-start  block-example border border-dark rounded-top p-3">
                        <h1><i className="bi bi-person-x-fill mx-5" style={{ fontSize: '15vh' }}></i>CONTACT</h1>
                        <Form.Group >

                            <Form.Control 
                                className = {error.has('name') && "validet"}                              
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                            <Form.Text  style={{color:"red"}}>
                            {error.has('name') && error.get('name')}
                                </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                                className = {error.has('email') && "validet"} 
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <Form.Text style={{color:"red"}}>
                            {error.has('email') && error.get('email')}
                             </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control
                               className = {error.has('message') && "validet"} 
                                as="textarea"
                                rows={3}
                                style={{ resize: "none" }}
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Text  style={{color:"red"}}>
                            {error.has('message') && error.get('message')}
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

export default Contact