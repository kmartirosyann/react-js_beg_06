import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

function ModalComponnent({responsDelete,modal}) {
  const handleClose =()=>{
    responsDelete(false)
  }

  return (
    <Modal show={modal} onHide={handleClose}>
      <Modal.Header closeButton>
      Are you sure want delete this item?
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={() => responsDelete(false)}>No</Button>
        <Button variant="danger" onClick={() => responsDelete(true)} >Yes</Button>
      </Modal.Footer>
    </Modal>
  )

}
ModalComponnent.prototype={
  responsDelete:PropTypes.func,
  modal:PropTypes.bool,
  handleClose:PropTypes.func,
}


export default ModalComponnent