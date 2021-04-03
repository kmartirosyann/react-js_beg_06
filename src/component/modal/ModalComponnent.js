import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


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
        <Button variant="primary" onClick={() => responsDelete(0)}>No</Button>
        <Button variant="danger" onClick={() => responsDelete(1)} >Yes</Button>
      </Modal.Footer>
    </Modal>
  )

}
ModalComponnent.prototype={
  responsDelete:PropTypes.func,
  modal:PropTypes.bool,
  handleClose:PropTypes.func,
}


export default withRouter (ModalComponnent)