import React from 'react'
import { Col, Row, Button ,Modal} from 'react-bootstrap'
import TodoLoader from '../loader/TodoLoader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


 const TodoList = React.memo( ({ 
    inputArrey, 
     removeitems, 
     allModallDelete, 
     active, 
     hendelechange,
     selectAllTasks,
     hendelcansel,
     editItem,
     isLoader,
     }) => 
     {
    const itemsArrey =inputArrey && inputArrey.map((item, index) => {

        return (
           
                <Col key={index} className="input-group col-lg-4 ">
                <Modal.Dialog  style= {{width : "100%"}}>
                    <Modal.Header >
                      <Link to={`/sinlPach/${item._id}`}> <Modal.Title>{item.title}</Modal.Title></Link> 
                        <input 
                        type="checkbox" 
                        onChange={ () => hendelechange(item._id)} 
                        checked ={item.active}
                         />
                    </Modal.Header>

                    <Modal.Body className="text-left">
                        <p style={{lineBreak: "anywhere",overflow: "auto", height: "10vh"}}>{item.description}</p>
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
            inputArrey.length !== 0 ? <Row  className="justify-content-center"> {itemsArrey} </Row>:
                <Row className="justify-content-center">
                    <Col className="input-group col-lg-6 justify-content-center">
                        <h4>There is no todo</h4>
                    </Col>
                </Row>}
          {inputArrey.length !== 0 &&  <Row className="justify-content-center">
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


export default TodoList
