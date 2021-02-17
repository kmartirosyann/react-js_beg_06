import React, { Component } from 'react'
import AddItemTodo from './AddItemTodo'
import Todo from './Todo'

class AddNewTask extends Component {
    state = {
        inputValue: '',
        inputArrey: []
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    hendelSubmit = (data) => {
        if (data !== '') {
            const test = [...this.state.inputArrey]
            test.push(data)
            this.setState({ inputArrey: test, inputValue: '' })
        }
    }

    
    render() {
        return (
            <div>
                <Todo
                    hendelSubmit={this.hendelSubmit}
                    hendelChange={this.hendelChange}
                    inputValue={this.state.inputValue}
                />
                <AddItemTodo
                    items={this.state.inputArrey}
                />
            </div>
        )
    }
}


export default AddNewTask