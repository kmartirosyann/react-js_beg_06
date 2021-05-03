import React from 'react'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validation from '../vaidation/validation'
import {isOpenMoalEdit,clearItemId} from '../../store/actions/onOffModale';
import {addTodoItem , updateSinglPach} from '../../store/actions/actionReqvest';
import DatePicker from "react-datepicker";





const InputTodo =({
    addTodoItem,
    editData,    
    show,
    isOpenMoalEdit,
    active,
    _id,
    inputArray,
    updateSinglPach,
    clearItemId,
    history

}) => {
    
const [change, setChangh] = React.useState(editData);
const [valid, setValid] = React.useState({isValid:false})

const id = !!_id

React.useEffect(()=>{ 
    setValid(editData)
    if(_id){
 let arr = inputArray.find((item)=>item._id === _id);
 setChangh(arr)
    }else setChangh(editData)
},[id])



const handleClose =()=>{
    isOpenMoalEdit()
    clearItemId()
   

};
const handeleChange =(e)=>{ 
    setChangh({...change,[e.target.name]:e.target.value})
    // const {name} =e.target
    // handelValidet(name)
};

const handelBlur = (e)=>{
    const {name} =e.target
    handelValidet(name)
}

const handelValidet =  (name) => {
    let valid = validation(change,name);
    setValid(valid); 
}

const setNewDate = (date)=>{
    setChangh({...change,date})
}

const handeleSubmit =()=>{
    const {title,description ,date } = change
    let newDate;
   if(typeof date === String){
    newDate = date.slice(0,10)
   }
   if (typeof date === Object)  newDate = date.toISOString().slice(0,10)
    
    if (valid && !valid.isValid){
    if(!!_id){
        updateSinglPach(title,description,newDate ,_id,)
    }else {  
    addTodoItem(title,description,newDate )
    }

    isOpenMoalEdit()
    setChangh({title:'',description :'',date:new Date()})
}
};
  
    
    const {title,description,date }= change
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
                            onBlur={handelBlur}
                            name="title"
                           
                            
                        />
                         <Form.Text style={{ color: "red" }}>
                               {valid && valid.isValid && valid.errors.title}
                            </Form.Text>
                        </Modal.Body>
                    <Modal.Body>
                        <Form.Control as="textarea" rows={3}
                            id="textarea"
                            name="description"
                            defaultValue={description}
                            onChange={handeleChange}
                            onBlur={handelBlur}
                           
                        />
                         <Form.Text style={{ color: "red" }}>
                               {valid && valid.isValid && valid.errors.description}
                            </Form.Text>
                    </Modal.Body>
                    <Modal.Body>
                    <DatePicker 
                    className= "form-control"
                    selected={new Date(date) || date} 
                    onChange={date => setNewDate(date)}
                    onBlur={date => setNewDate(date)}
                    name = "startDate"
                    value ={ new Date(date) || date}
                    />
                     <Form.Text style={{ color: "red" }}> {
                     valid && valid.isValid && valid.errors.description
                     }</Form.Text>
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


const mapStateToProps =(state)=> ({
    show:state.modalReducer.show,
    _id:state.modalReducer._id,
    inputArray:state.globaleReducer.inputArray,
    active:state.modalReducer.active,
    editData:state.globaleReducer.editData
})

const mapDispatchToProps = {
    isOpenMoalEdit, 
    addTodoItem ,
    updateSinglPach,
    clearItemId
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



