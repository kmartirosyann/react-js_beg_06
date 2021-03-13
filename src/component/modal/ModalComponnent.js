import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalComponnent({responsDelete,modal}) {
  const handleClose =()=>{
    responsDelete(false)
  }

  return (
    <Modal show={modal} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => responsDelete(false)}>No</Button>
        <Button variant="secondary" onClick={() => responsDelete(true)} >Yes</Button>
      </Modal.Footer>
    </Modal>
  )

}


export default ModalComponnent