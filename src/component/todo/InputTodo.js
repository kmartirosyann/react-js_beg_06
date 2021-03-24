import React from 'react'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';


const InputTodo = React.memo(({
    hendelSubmit,
    hendelChange,
    title,
    handleClose,
    show,
    description,
    index,
    active
}) => {
    const buttonSbmit = () => {
        return hendelSubmit({ title, description, active: false })
    }
    return (
        <Row className="justify-content-center" >
            <Col className="my-3 input-group justify-content-center col-lg-6">
                <Button
                    variant="primary"
                    onClick={handleClose}
                    disabled={active}
                >
                    {index == "" ? "Add new item" : "Update this item"}
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
                            value={title}
                            onChange={hendelChange}
                            name="title"
                            
                        /></Modal.Body>
                    <Modal.Body>
                        <Form.Control as="textarea" rows={3}
                            id="textarea"
                            name="description"
                            value={description}
                            onChange={hendelChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                         </Button>
                        <Button variant="primary" onClick={buttonSbmit}>
                            {index === '' ? " Save Changes" : "Edit"}
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Col>
        </Row>
    )

}
)


InputTodo.propTypes = {
    buttonSbmit: PropTypes.func,
    hendelSubmit: PropTypes.func,
    handleClose: PropTypes.func,
    hendelChange: PropTypes.func,
    title: PropTypes.string,
    hendelPress: PropTypes.func,
    active: PropTypes.bool,
    show: PropTypes.bool,
    index: PropTypes.string,
    description: PropTypes.string,
}
export default InputTodo



