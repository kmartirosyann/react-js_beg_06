import React from 'react';
import {_id} from '../functionId'
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

 const InputTodo = React.memo(({ 
    hendelSubmit, 
    hendelChange, 
    inputValue, 
    hendelPress, 
    active })=> {
     const buttonSbmit = ()=> {
      return  hendelSubmit({ inputItem: inputValue, id: _id(), active: false })
     }
   
    
    return (
        <Row  >
            <Col className="my-3 input-group text-center col-lg-6">
                <input
                    id="first_name"
                    type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={inputValue}
                    onChange={hendelChange}
                    name="inputValue"
                    disabled={active}
                    onKeyPress={(e) => hendelPress(e, { inputItem: inputValue, id: _id(), active: false })}
                />
                <Button
                    onClick={buttonSbmit}
                    disabled={active}
                    className="input-group-text btn btn-susser">
                    submit
                </Button>
            </Col>
        </Row>
    )

},(prevProps,nextProps)=>{
    if(prevProps.active !== nextProps.active  || prevProps.inputValue !== nextProps.inputValue){
        return false
    }else return true
}
 )

 InputTodo.PropTypes={
    hendelSubmit : PropTypes.func,
    active : PropTypes.bool, 
    hendelchange :PropTypes.func,
    inputValue :PropTypes.func ,
    hendelPress :PropTypes.func
}
export default InputTodo



