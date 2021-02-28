import React, { Component } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import TodoList from './TodoList'
import Todo from './InputTodo'

class TodoFunction extends Component {
    state = {
        inputValue: '',
        inputArrey: [],
        select: [],
       
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    hendelSubmit = (data) => {
        if (data.inputItem !== '') {
            const test = [...this.state.inputArrey, data]
            this.setState({ inputArrey: test, inputValue: '' ,active :false})
        }
    }
    hendelPress = (event, data) => {
        if (event.key === 'Enter') {
            this.hendelSubmit(data)
        }
    }
    removeitems = (id) => {

        let remove = this.state.inputArrey.filter((item) => item.id !== id)
        this.setState({ inputArrey: remove })

    }

    addSelect = (id) => {
        let select = [...this.state.select, id]
        this.setState({ select: select , })
        let arr = this.state.inputArrey.map((item)=>{
            if(item.id === id)item.active = true 
            return item
        })
       this.setState({inputArrey:arr})
    }

    removeSelect = (e) => {
        if (e.key === 'Enter') {
            let removeAllSelect = this.state.inputArrey.filter((item) => !this.state.select.includes(item.id))
            this.setState({ inputArrey: removeAllSelect })
        }
    }

    render() {
        return (
            <Container className="container center-align truncate">
            <Row>
                <Col className="col-6">
                <h3>Todo list</h3>
                </Col>
            </Row>
                <Todo
                    hendelSubmit={this.hendelSubmit}
                    hendelChange={this.hendelChange}
                    inputValue={this.state.inputValue}
                    hendelPress={this.hendelPress}
                />
                <TodoList

                    items={this.state.inputArrey}
                    removeitems={this.removeitems}
                    addRemoveitems={this.addSelect}
                    removeSelect={this.removeSelect}
                />
            </Container>
        )
    }
}


export default TodoFunction