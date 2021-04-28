import React from 'react'
import { Col, Row, Button ,Modal} from 'react-bootstrap'
import TodoLoader from '../loader/TodoLoader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {isOpenMoalEdit,MoalComponent,select,censelDelete,AllSelectId} from '../../store/actions/onOffModale';
import {deleteSinglePach,reqvestChangeStatus} from '../../store/actions/actionReqvest';
import DatePicker from 'react-datepicker';

 const TodoList = React.memo( ({ 
    inputArray, 
    isOpenMoalEdit,
    MoalComponent, 
    AllSelectId, 
     censelDelete,
     reqvestChangeStatus,
     active, 
     select,
     selectId,
     isLoader,
     }) => 
     {

     const selectAllTasks = ()=>{
    let arrId=[]
    inputArray.forEach(element =>arrId.push(element._id))
    AllSelectId (arrId)

     };
   
     const removeitems = (id)=>{
        MoalComponent(id)
     };

     const editItem =(id)=>{
        isOpenMoalEdit(id)
     };
    const hendelechange = (id)=>{
        select(id)
    }

    const hendelcansel = ()=>{
        censelDelete()
    }
    const allModallDelete =()=>{
        MoalComponent()
    }
    const changeStatus =(id, status)=>{
        let itemStatus ='';
        if(status === 'active') itemStatus = 'done'
        else if(status === 'done') itemStatus = 'active'
         reqvestChangeStatus(id,itemStatus)
    }

    const itemsArrey =inputArray && inputArray.map((item, index) => {
        return (
           
                <Col key={index} className="input-group col-lg-4 ">
                <Modal.Dialog  style= {{width : "100%"}}>
                    <Modal.Header >
                      <Link to={`/sinlPach/${item._id}`}> <Modal.Title>{item.title}</Modal.Title></Link> 
                        <input 
                        type="checkbox" 
                        onChange={ () => hendelechange(item._id)} 
                        checked ={selectId.includes(item._id)}
                         />
                    </Modal.Header>

                    <Modal.Body className="text-left">
                        <p style={{lineBreak: "anywhere",overflow: "auto"}}>{item.description}</p>
                    </Modal.Body>
                    <Modal.Body className="text-left">
                        <DatePicker
                        className="form-control"
                        value={new Date(item.date).toDateString()} 
                        readOnly = {true}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                       
                        <Button 
                        className={"btn-danger  input-group-text btn btn-danger"}
                        disabled={active}
                        onClick = {()=>editItem(item._id)}
                        > 
                        <i className=" bi bi-pin-angle"></i>
                        </Button>
                        <Button 
                        className={"btn-danger  input-group-text btn btn-danger"}
                        disabled={active}
                        onClick = {()=>changeStatus(item._id,item.status)}
                        > 
                       
                     {item.status === "active"  ?   <i className="bi bi-check-circle"></i> : <i className="bi bi-arrow-repeat"></i>}
                        </Button>
                        <Button  
                        className="input-group-text btn btn-danger"
                        onClick={() => removeitems(item._id)}
                        disabled={active}
                        > 
                        <i className="bi bi-trash" ></i>
                        </Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                    </Col>
        )
    })
   
    return (
        <div>
            { isLoader ?<Row  className="justify-content-center">
                            <Col className="input-group col-lg-4">
                                <TodoLoader/> 
                            </Col>  
                            <Col className="input-group col-lg-4">
                                <TodoLoader/> 
                            </Col> 
                    </Row>:
            !!inputArray.length ? <Row  className="justify-content-center"> {itemsArrey} </Row>:
                <Row className="justify-content-center">
                    <Col className="input-group col-lg-6 justify-content-center">
                        <h4>There is no todo</h4>
                    </Col>
                </Row>}
          {!!inputArray.length &&  <Row className="justify-content-center">
                <Col className="input-group col-6 justify-content-center ">
                  {!active ?  <Button
                    className="input-group-text btn btn-susser m-5 "
                    onClick={selectAllTasks}
                    >
                    Select all tasks
                    </Button> :
                    <>
                    <Button
                    className="input-group-text btn btn-susser m-5 "
                    onClick={hendelcansel}
                    >
                   Cancel
                    
                    </Button> 
                    
                    <Button
                        className="input-group-text btn btn-danger m-5 "
                        onClick={allModallDelete}
                        disabled={!active}
                    >
                        Delete all todo
                    <i className="bi bi-trash" ></i>
                    </Button>
                    </>
     }
                </Col>
            </Row>}
            
        </div>
    )
}
 )

 const mapStateToProps=(state)=>({
    inputArray:state.globaleReducer.inputArray,
    isLoader:state.globaleReducer.isLoader,
    active :state.modalReducer.active,
    selectId:state.modalReducer.selectId
 })
const mapDispatchToProps={
    isOpenMoalEdit,
    deleteSinglePach,
    MoalComponent,
    censelDelete,
    select,
    AllSelectId,
    reqvestChangeStatus
}

TodoList.propTypes={
    inputArrey : PropTypes.array, 
    removeitems : PropTypes.func, 
    responsDelete :PropTypes.func, 
    allModallDelete:PropTypes.func, 
    hendelechange :PropTypes.func,
    selectAllTasks : PropTypes.func,
    hendelcansel : PropTypes.func,
    active : PropTypes.bool, 
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
