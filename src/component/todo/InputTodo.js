import React from 'react';
import { _id } from '../functionId'
import { Row, Col, Button, Modal ,Form} from 'react-bootstrap';
import PropTypes from 'prop-types';


const InputTodo = React.memo(({
    hendelSubmit,
    hendelChange,
    inputValue,
    hendelPress,
    handleClose,
    show ,
    text,
    index,
    active
    }) => {
    const buttonSbmit = () => {
        return hendelSubmit({ inputItem: inputValue, id: _id(),text : text, active: false })
    }
    return (
        <Row className="justify-content-center" >
            <Col className="my-3 input-group justify-content-center col-lg-6">
                <Button 
                variant="primary"
                 onClick={handleClose}
                 disabled={active}
                 >
                   {index === '' ? "Add new item": "Update this item"}
                </Button>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            id="first_name"
                            type="text"
                            className="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={ inputValue}
                            onChange={hendelChange}
                            name="inputValue"
                            onKeyPress={(e) => hendelPress(e, { inputItem: inputValue, id: _id(), active: false })}
                        /></Modal.Body>
                        <Modal.Body>
                            <Form.Control as="textarea" rows={3}
                            id = "textarea" 
                            name = "text"
                            value ={text}
                            onChange={hendelChange}
                            />
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                         </Button>
                        <Button variant="primary" onClick={buttonSbmit}>
                        {index === '' ?" Save Changes" : "Edit"}
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Col>
        </Row>
    )

}
)


InputTodo.propTypes = {
    buttonSbmit:PropTypes.func,
    hendelSubmit: PropTypes.func,
    handleClose:PropTypes.func,  
    hendelChange: PropTypes.func,
    inputValue: PropTypes.string,
    hendelPress: PropTypes.func,
    active:PropTypes.bool,
    show: PropTypes.bool,
    index:PropTypes.string,
    text:PropTypes.string,
}
export default InputTodo



