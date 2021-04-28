import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MoalComponentClose } from '../../store/actions/onOffModale';
import { deleteSinglePach, deleteAllTodo } from '../../store/actions/actionReqvest'


function ModalComponnent({
  deleteAllTodo,
  modal,
  deleteSinglePach,
  selectId,
  MoalComponentClose,
  _id,
  history
}) {
  const handleClose = () => {
    MoalComponentClose()
  };

  const responsDelete = () => {

    let arrId = new Set()
    selectId.forEach(el => arrId.add(el))
    let arr = []
    for (let key of arrId) {
      arr.push(key)
    }

    if (!!selectId.length) {
      deleteAllTodo(arr)
    } else if (!!_id) {
      deleteSinglePach(_id)
    history.push('/todo')
    }
    MoalComponentClose()
  }
  return (
    <Modal show={modal} onHide={handleClose}>
      <Modal.Header closeButton>
        Are you sure want delete this item?
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>No</Button>
        <Button variant="danger" onClick={responsDelete} >Yes</Button>
      </Modal.Footer>
    </Modal>
  )

}

const mapStateToProps = (state) => ({
  modal: state.modalReducer.modal,
  selectId: state.modalReducer.selectId,
  _id: state.modalReducer._id
})

const mapDispatchToProps = {
  deleteSinglePach,
  MoalComponentClose,
  deleteAllTodo
}

ModalComponnent.prototype = {
  responsDelete: PropTypes.func,
  modal: PropTypes.bool,
  handleClose: PropTypes.func,
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ModalComponnent))