import React from 'react'
import { Col, Row ,Button} from 'react-bootstrap'



function TodoList({ items, removeitems,addRemoveitems,removeSelect,active }) {
    const itemsArrey = items && items.map((item, index) => {
        return (
            <Row  key={index}>
                <Col className="input-group col-6 ">
                    <input
                        id="first_name"
                        type="text"
                        className="form-control"
                        value={item.inputItem}
                        readOnly 
                    />
                    <Button 
                    className= {`${item.active ? "btn-danger": "input-group-text"} btn btn-danger`} 
                    onClick={() => {
                        addRemoveitems( item.id)}}
                    onKeyPress={removeSelect}
                    >
                    <i className=" bi bi-pin-angle"></i>
                    </Button>
                    <Button 
                    className="input-group-text btn btn-danger" 
                    onClick={() => removeitems(item.id)}>
                         
                    <i className="bi bi-trash" ></i>
                    </Button>
                </Col>
            </Row>

        )
    })
    return (
        <div>
            {itemsArrey}
        </div>
    )
}

export default TodoList
