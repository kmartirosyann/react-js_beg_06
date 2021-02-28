import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default class InputTodo extends Component {
    render() {
        const { hendelSubmit, hendelChange, inputValue, hendelPress } = this.props
        return (
            <Row  >
                <Col className="my-3 input-group text-center col-6">
                    <input
                        id="first_name"
                        type="text"
                        className="form-control"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={inputValue}
                        onChange={hendelChange}
                        name="inputValue"
                        onKeyPress={(e) => hendelPress(e, { inputItem: inputValue, id: Math.random() * 100 ,active : false})}
                    />
                    <Button onClick={() => hendelSubmit({ inputItem: inputValue, id: Math.random() * 100 ,active : false})}

                        className="input-group-text btn btn-susser">submit</Button>
                </Col>
            </Row>
        )
    }
}





