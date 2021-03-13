import React from 'react'
import { Col, Row, Button ,Modal} from 'react-bootstrap'
import PropTypes from 'prop-types';


 const TodoList = React.memo( ({ 
    inputArrey, 
     removeitems, 
     allModallDelete, 
     active, 
     hendelechange,
     selectAllTasks,
     hendelcansel,
     editItem,
     }) => 
     {
         
    const itemsArrey =inputArrey && inputArrey.map((item, index) => {

        return (
           
                <Col key={index} className="input-group col-lg-4 ">
                <Modal.Dialog  style= {{width : "100%"}}>
                    <Modal.Header >
                        <Modal.Title>{item.inputItem}</Modal.Title>
                        <input 
                        type="checkbox" 
                        onChange={ () => hendelechange(item.id)} 
                        checked ={item.active}
                         />
                    </Modal.Header>

                    <Modal.Body className="text-left">
                        <p style={{lineBreak: "anywhere",overflow: "auto", height: "10vh"}}>{item.text}</p>
                    </Modal.Body>

                    <Modal.Footer>
                       
                        <Button 
                        className={"btn-danger  input-group-text btn btn-danger"}
                        disabled={active}
                        onClick = {()=>editItem(item.id)}
                        > 
                        <i className=" bi bi-pin-angle"></i>
                        </Button>
                        <Button  
                        className="input-group-text btn btn-danger"
                        onClick={() => removeitems(item.id)}
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
             
            {inputArrey.length !== 0 ? <Row  className="justify-content-center"> {itemsArrey} </Row>:
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
    items : PropTypes.array, 
    removeitems : PropTypes.func, 
    responsDelete :PropTypes.func, 
    active : PropTypes.bool, 
    hendelechange :PropTypes.func,
    selectAllTasks : PropTypes.func,
    hendelcansel : PropTypes.func
}


export default TodoList
