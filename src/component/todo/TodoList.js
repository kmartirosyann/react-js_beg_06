import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';


 const TodoList = React.memo( ({ 
     items, 
     removeitems, 
     removeSelect, 
     active, 
     hendelechange,
     selectAllTasks,
     hendelcansel
     }) => 
     {
         
    const itemsArrey = items.map((item, index) => {

        return (
            <Row key={index}>
                <Col className="input-group col-lg-6 ">

                    <div >
                        <span 
                        className="input-group-text" 
                        style={{ height: '38px' }} 
                        id="basic-addon1"
                        >
                            <input 
                            type="checkbox" 
                            onChange={ () => hendelechange(item.id)} 
                            checked ={item.active}
                            />
                        </span>
                    </div>

                    <input
                        id="first_name"
                        type="text"
                        className="form-control"
                        value={item.inputItem}
                        readOnly
                    />
                    <Button
                        className={"btn-danger  input-group-text btn btn-danger"}
                        disabled={active}

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

                </Col>

            </Row>

        )
    })
    
    return (
        <div>
            {items.length !== 0 ? itemsArrey :
                <Row >
                    <Col className="input-group col-lg-6 justify-content-center">
                        <h4>There is no todo</h4>
                    </Col>
                </Row>}
          {items.length !== 0 &&  <Row>
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
                        onClick={removeSelect}
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

TodoList.PropTypes={
    items : PropTypes.array, 
    removeitems : PropTypes.func, 
    removeSelect :PropTypes.func, 
    active : PropTypes.bool, 
    hendelechange :PropTypes.func,
    selectAllTasks : PropTypes.func,
    hendelcansel : PropTypes.func
}


export default TodoList
