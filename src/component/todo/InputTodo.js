import React from 'react'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {isOpenMoalEdit} from '../../store/actions/onOffModale';
import {addTodoItem , updateSinglPach} from '../../store/actions/actionReqvest'


const InputTodo = React.memo(({
    addTodoItem,
    editData,    
    show,
    isOpenMoalEdit,
    active,
    _id,
    inputArray,
    updateSinglPach
}) => {
    
    
const [change, setChangh] = React.useState({editData});

React.useEffect(()=>{
    if(!!_id){
 let arr = inputArray.find((item)=>item._id === _id);
 setChangh(arr)
    }
},[_id])

const handleClose =()=>{
    isOpenMoalEdit()
};
const handeleChange =(e)=>{
    setChangh({...change,[e.target.name]:e.target.value})

};

const handeleSubmit =()=>{
    const {title,description  } = change
    if(!!_id){
        updateSinglPach(title,description,_id)
    }else {  
    addTodoItem(title,description )
    }
    isOpenMoalEdit()
    setChangh({title:'',description :''})
};
  
    
    const {title,description }= change

    return (
        <Row className="justify-content-center" >
            <Col className="my-3 input-group justify-content-center col-lg-6">
                <Button
                    variant="primary"
                    onClick={handleClose}
                    disabled={active}
                >
                    Add new item
                    
                </Button>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{!_id ? "Add new item":"Edit item"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            id="first_name"
                            type="text"
                            className="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            defaultValue={title}
                            onChange={handeleChange}
                            name="title"
                            
                        /></Modal.Body>
                    <Modal.Body>
                        <Form.Control as="textarea" rows={3}
                            id="textarea"
                            name="description"
                            defaultValue={description}
                            onChange={handeleChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                         </Button>
                        <Button variant="primary" onClick={handeleSubmit}>
                            {!_id  ? " Save Changes" : "Edit"}
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Col>
        </Row>
    )

}
)

const mapStateToProps =(state)=> ({
    show:state.modalReducer.show,
    _id:state.modalReducer._id,
    inputArray:state.globaleReducer.inputArray,
    active:state.modalReducer.active
})

const mapDispatchToProps = {
    isOpenMoalEdit, 
    addTodoItem ,
    updateSinglPach
}


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
export default connect(mapStateToProps,mapDispatchToProps)(InputTodo)



