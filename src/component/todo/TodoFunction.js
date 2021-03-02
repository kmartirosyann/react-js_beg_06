import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TodoList from './TodoList'
import InputTodo from './InputTodo'

class TodoFunction extends Component {
    state = {
        inputValue: '',
        inputArrey: [],
        select: new Set(),
        active: false
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    hendelSubmit = (data) => {
        if (data.inputItem !== '') {
            const test = [...this.state.inputArrey, data]
            this.setState({ inputArrey: test, inputValue: '', active: false })
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



    removeSelect = (e) => {
        let removeAllSelect
        if (e.key === 'Enter') {
            removeAllSelect = this.state.inputArrey.filter((item) => !this.state.select.has(item.id))

        }
        removeAllSelect = this.state.inputArrey.filter((item) => !this.state.select.has(item.id))
        this.setState({ inputArrey: removeAllSelect, active: false })
    }

    hendelechange = (id) => {
        let mySet = this.state.select
        if (mySet.has(id)) {
            mySet.delete(id)
        } else mySet.add(id)
        this.setState({ select: mySet })
        if (mySet.size > 0) {
            this.setState({ active: true })
        } else this.setState({ active: false })
    }

    render() {
        return (
            <Container className="container center-align truncate">
                <Row>
                    <Col className="col-6">
                        <h3>Todo list</h3>
                    </Col>
                </Row>
                <InputTodo
                    hendelSubmit={this.hendelSubmit}
                    hendelChange={this.hendelChange}
                    inputValue={this.state.inputValue}
                    hendelPress={this.hendelPress}
                    active={this.state.active}
                />
                <TodoList

                    items={this.state.inputArrey}
                    removeitems={this.removeitems}
                    removeSelect={this.removeSelect}
                    hendelechange={this.hendelechange}
                    active={this.state.active}
                />
            </Container>
        )
    }
}


export default TodoFunction