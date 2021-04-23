import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TodoList from './TodoList';
import InputTodo from './InputTodo';
import ModalComponnent from '../modal/ModalComponnent';
import {getTodoItems} from  '../../store/actions/actionReqvest';
import { connect } from 'react-redux';


class TodoFunction extends Component {

    componentDidMount() {
        const {getTodoItems}=this.props
        getTodoItems()
    };
    
    render() {
        return (
            <Container className="container center-align truncate">
                <ModalComponnent/>
                <>
                    <Row className="justify-content-center">
                        <Col className="col-lg-2">
                            <h3>Todo list</h3>
                        </Col>
                    </Row>
                    <InputTodo />
                    <TodoList/>
                </>

            </Container>
        )
    }
}
const mapStateToProps =(state)=>({
    inputArrey:state.globaleReducer.inputArrey,
    isLoader:state.isLoader,
   
})

const mapDispatchToProps ={
    getTodoItems
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoFunction)